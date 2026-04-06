import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rawPort = process.env.PORT || "5000";

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || "/";

const publicDir = path.resolve(import.meta.dirname, "public");

/* Plugin: serve public-dir video files with proper range-request support.
   Vite's dev server does not add Accept-Ranges headers, which prevents
   browsers from streaming / auto-playing large video files. */
const videoRangePlugin = {
  name: "video-range-requests",
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      const url: string = req.url || "";
      /* Strip query string and decode */
      const pathname = decodeURIComponent(url.split("?")[0]);

      if (!/\.(mp4|webm|ogg|mov)$/i.test(pathname)) {
        return next();
      }

      /* Map URL to filesystem path (strip leading basePath if present) */
      const relativePath = pathname.startsWith(basePath!)
        ? pathname.slice(basePath!.length)
        : pathname;

      const filePath = path.join(publicDir, relativePath);

      if (!fs.existsSync(filePath)) {
        return next();
      }

      const stat = fs.statSync(filePath);
      const fileSize = stat.size;
      const rangeHeader: string | undefined = req.headers["range"];

      if (rangeHeader) {
        /* Partial content (206) */
        const [startStr, endStr] = rangeHeader
          .replace(/bytes=/, "")
          .split("-");
        const start = parseInt(startStr, 10);
        const end = endStr ? parseInt(endStr, 10) : fileSize - 1;
        const chunkSize = end - start + 1;

        res.writeHead(206, {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunkSize,
          "Content-Type": "video/mp4",
        });

        fs.createReadStream(filePath, { start, end }).pipe(res);
      } else {
        /* Full file */
        res.writeHead(200, {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
          "Accept-Ranges": "bytes",
        });

        fs.createReadStream(filePath).pipe(res);
      }
    });
  },
};

export default defineConfig({
  base: basePath,
  plugins: [
    videoRangePlugin,
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "attached_assets",
      ),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});

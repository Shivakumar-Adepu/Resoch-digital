# Vercel Deployment Configuration

## Issue Fixed: "Function Runtimes must have a valid version"

### What was wrong?
The `vercel.json` had an invalid runtime configuration:
```json
"functions": {
  "artifacts/api-server/**": {
    "runtime": "nodejs20.x"  // ❌ INVALID - Vercel doesn't support this format for bundled applications
  }
}
```

### Solution Applied ✅

Updated `vercel.json` to remove the invalid function runtime specification:
```json
{
  "buildCommand": "pnpm run build",
  "installCommand": "pnpm install",
  "outputDirectory": "artifacts/api-server/dist",
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Why this works:

1. **`buildCommand`**: Runs the full monorepo build with typecheck
2. **`installCommand`**: Uses pnpm for dependency installation
3. **`outputDirectory`**: Points Vercel to the compiled ESM bundle output
4. **`env`**: Sets production environment variables

Since your project is bundled into a single ESM file by esbuild, Vercel treats it as a static output, not serverless functions, so no runtime specification is needed.

## Deployment Steps

1. **Commit the fixed configuration**:
   ```bash
   git add vercel.json
   git commit -m "Fix Vercel deployment configuration"
   git push
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

3. **Verify the deployment**:
   ```bash
   curl https://your-project.vercel.app/api/health
   ```

## Alternative: If you need serverless functions

If you want to keep the serverless functions approach, you need:

1. **Create `api/` directory** at root:
   ```
   api/
   ├── health.ts
   ├── status.ts
   └── video.ts
   ```

2. **Add runtime export** in each file:
   ```typescript
   export const config = {
     runtime: 'nodejs20.x'
   };
   ```

3. **Remove `outputDirectory`** from `vercel.json`

However, **the bundled approach is recommended** for your monorepo structure.

## Common Errors & Fixes

| Error | Solution |
|-------|----------|
| "Function Runtimes must have a valid version" | Remove `functions` section if using bundled output |
| "Build failed: command not found" | Ensure `pnpm` is installed globally |
| "Cannot find module" | Run `pnpm install` locally first |
| "Port already in use" | Vercel auto-assigns ports; remove port binding |

## Environment Variables (Optional)

Add these in Vercel Project Settings → Environment Variables:

```
NODE_ENV=production
LOG_LEVEL=info
CORS_ORIGIN=*
PORT=3000
```

---

**Status**: ✅ Ready for deployment  
**Last Updated**: 2026-04-07

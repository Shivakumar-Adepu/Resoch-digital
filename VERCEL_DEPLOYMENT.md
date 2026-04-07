# Vercel Deployment Guide

## ✅ Fixed Issues

This repository has been configured for successful deployment to Vercel. The following fixes have been applied:

### 1. **Created `vercel.json`**
   - Explicit build command using `pnpm run build`
   - Proper pnpm installation command
   - Node.js 20.x runtime configuration
   - Production environment settings

### 2. **Created `.vercelignore`**
   - Excludes unnecessary files from deployment
   - Reduces build time and deployment size

### 3. **Fixed `artifacts/api-server/build.mjs`**
   - Cross-platform esbuild configuration
   - ESM output format for Node.js
   - Sourcemap support for debugging
   - Production minification

### 4. **Created `artifacts/api-server/src/index.ts`**
   - Express.js API server with proper TypeScript support
   - Health check endpoints (`/health` and `/api/health`)
   - CORS and middleware configuration
   - Error handling and logging with Pino

## 🚀 Deployment Steps

### Local Testing
```bash
# Install dependencies
pnpm install

# Run type checking
pnpm run typecheck

# Build the project
pnpm run build

# Start the API server (from artifacts/api-server)
pnpm -C artifacts/api-server run start
```

### Deploy to Vercel

1. **Connect Your Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework: "Other"
   - Root Directory: (leave as default)
   - Build Command: `pnpm run build`
   - Output Directory: `artifacts/api-server/dist`

3. **Environment Variables** (optional)
   ```
   NODE_ENV=production
   LOG_LEVEL=info
   CORS_ORIGIN=*
   ```

4. **Deploy**
   - Click "Deploy"
   - Monitor the deployment in the Vercel dashboard

### Verify Deployment
```bash
# After deployment, test the health endpoint
curl https://your-vercel-url.vercel.app/health
curl https://your-vercel-url.vercel.app/api/health
```

## 📋 Project Structure

```
Resoch-digital/
├── artifacts/
│   ├── api-server/          # Express API server
│   │   ├── src/
│   │   │   └── index.ts     # Main entry point
│   │   ├── build.mjs        # esbuild configuration
│   │   └── package.json
│   ├── resoch-digitals/     # Frontend (Vite + React)
│   └── mockup-sandbox/      # Sandbox environment
├── lib/                     # Shared libraries
├── scripts/                 # Utility scripts
├── vercel.json             # ✅ Vercel configuration
├── .vercelignore           # ✅ Vercel ignore file
└── pnpm-workspace.yaml     # pnpm workspace config
```

## 🔧 Troubleshooting

### Build Fails with "command not found"
- Ensure `pnpm` is installed: `npm install -g pnpm`
- Check that all packages are installed: `pnpm install`

### Port Already in Use
- Change the PORT in environment: `export PORT=3001`

### CORS Issues
- Update `CORS_ORIGIN` environment variable in Vercel project settings

### Memory Issues During Build
- Increase Node.js memory: Set `NODE_OPTIONS=--max-old-space-size=4096` in Vercel env vars

## 📚 References

- [Vercel Documentation](https://vercel.com/docs)
- [pnpm Monorepo Guide](https://pnpm.io/workspaces)
- [Express.js Guide](https://expressjs.com/)
- [esbuild Documentation](https://esbuild.github.io/)

---

**Last Updated**: 2026-04-07
**Status**: ✅ Ready for deployment

## eyrinkim-site

A React + Vite single-page site.

### Prerequisites
- Node.js and npm installed
- Git configured with access to the repo

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview local production build
```bash
npm run preview
```

### Deploy (GitHub Pages)
This project deploys the built `dist` directory to the `gh-pages` branch via the `deploy` script.

Primary command:
```bash
cd /Users/eyrinkim/eyrinkim && npm run deploy
```

#### Update workflow (any time you make changes)
1. Commit your changes to `main`:
   ```bash
   git add -A
   git commit -m "Update"
   git push origin main
   ```
2. Deploy:
   ```bash
   cd /Users/eyrinkim/eyrinkim && npm run deploy
   ```

### Notes
- Client-side routing is handled via `_redirects` mapping all routes to `/index.html`.
- Security headers are configured via `_headers`.



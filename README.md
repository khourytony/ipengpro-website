# IPeng Pro Website

A modern website built with React, TypeScript, and Vite.

## Features

- Modern React 18 with TypeScript
- Vite for fast development and optimized builds
- React Router for client-side routing
- Tailwind CSS for styling
- Lucide React for icons

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Running locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Configuration

The site is configured to deploy to: `https://khourytony.github.io/ipengpro-website/`

Key configurations:
- `vite.config.ts` now auto-detects GitHub Pages builds (via `GITHUB_ACTIONS`) and sets the base path to the repository name; other builds use `/` by default. You can override with `BASE_PATH` if needed.
- `.github/workflows/deploy.yml` handles automatic deployment
- `public/404.html` and redirect script in `index.html` enable client-side routing

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. The `dist` folder contains the static files ready for deployment
3. Deploy the contents of `dist` to your hosting provider

## Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

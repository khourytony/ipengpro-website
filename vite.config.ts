import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'ipengpro-website';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const base = process.env.BASE_PATH || (isGitHubActions ? `/${repoName}/` : '/');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

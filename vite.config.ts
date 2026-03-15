import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const normalizeBase = (base: string) => {
  if (!base) return '/';
  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && repoName;
const basePath = normalizeBase(process.env.BASE_PATH ?? (isGitHubPagesBuild ? `/${repoName}/` : '/'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

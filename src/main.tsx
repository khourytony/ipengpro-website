import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const withTrailingSlash = (value: string) => (value.endsWith('/') ? value : `${value}/`);
const baseUrl = withTrailingSlash(import.meta.env.BASE_URL || '/');

const favicon = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
if (favicon) {
  favicon.href = `${baseUrl}vite.svg`;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

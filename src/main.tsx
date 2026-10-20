import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const preloadRetryKey = 'adaspending-vite-preload-retried';

window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  try {
    if (sessionStorage.getItem(preloadRetryKey)) return;
    sessionStorage.setItem(preloadRetryKey, '1');
  } catch {
    return;
  }
  window.location.reload();
});

window.setTimeout(() => {
  try {
    sessionStorage.removeItem(preloadRetryKey);
  } catch {
    // Storage is optional; normal app loading continues without it.
  }
}, 30_000);

createRoot(document.getElementById("root")!).render(<App />);

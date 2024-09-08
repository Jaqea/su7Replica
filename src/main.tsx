import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { setupAssets } from './plugins';
import App from './App.tsx';

function setupApp() {
  setupAssets();

  const app = createRoot(document.getElementById('root')!);

  app.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

setupApp();

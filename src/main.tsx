import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ProviderContext } from './context/context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="h-screen w-full flex flex-col overflow-y-hidden bg-slate-900 items-center p-2 italic">
      <ProviderContext>
        <App />
      </ProviderContext>
    </div>
  </StrictMode>
);

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/constants.ts';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={AppRoutes.root}>
    <App />
  </BrowserRouter>
);

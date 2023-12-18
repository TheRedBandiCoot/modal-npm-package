import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from '../';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>
);

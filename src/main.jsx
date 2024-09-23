import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//app file
import App from './app/App.jsx';
//styles
import './app/styles/index.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

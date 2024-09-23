import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//app file
import App from './app/App.jsx';
//styles
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>,
);

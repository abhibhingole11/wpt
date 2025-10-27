
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import {ToastContainer} from 'react-toastify'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <App />
        <ToastContainer></ToastContainer>
    </BrowserRouter>
  
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <ToastContainer autoClose={8000} />

  </StrictMode>,
)
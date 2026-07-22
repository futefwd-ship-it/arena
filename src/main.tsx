declare global{
  interface Window{
    global: Window;
  }
}

if(typeof window.global==="undefined"){
  window.global = window;
}

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

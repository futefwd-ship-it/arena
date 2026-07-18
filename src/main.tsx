declare global{
  interface Window{
    global:any;
  }
}

if(typeof (window as any).global==="undefined"){
  (window as any).global= window;
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

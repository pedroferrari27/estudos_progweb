import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Timer from './Timer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timer />
  </StrictMode>,
)

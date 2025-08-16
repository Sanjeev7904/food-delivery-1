import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
    
    
  </React.StrictMode>,
)

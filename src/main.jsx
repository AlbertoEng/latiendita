import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CarritoProvider } from './contextCarrito/CarritoProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </>,
)

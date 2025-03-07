import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import './index.css'
import Calculadora from './calculadora.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Calculadora />
    <App />
    <Footer />
  </React.StrictMode>,
)

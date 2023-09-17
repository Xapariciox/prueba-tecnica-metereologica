import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './styles/index.css'
import { ForecastProvider } from './context/ForecastProvider.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    //   <React.StrictMode>
    <ForecastProvider>
        <App />
    </ForecastProvider>
    //   </React.StrictMode>
)

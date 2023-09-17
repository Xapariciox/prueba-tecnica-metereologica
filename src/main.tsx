import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './styles/index.css'
import { ForecastProvider } from './context/ForecastProvider.js'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    //   <React.StrictMode>
    <>
        <Toaster position="top-center" duration={2000}></Toaster>
        <ForecastProvider>
            <App />
        </ForecastProvider>
    </>
    //   </React.StrictMode>
)

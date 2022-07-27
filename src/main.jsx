import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {AppTheme} from "./theme";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <AppTheme >
            <App />
        </AppTheme>
      </BrowserRouter>
  </React.StrictMode>
)

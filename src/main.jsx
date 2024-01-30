import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import TaskProvider from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
<TaskProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </TaskProvider>
  </React.StrictMode>,
  
)

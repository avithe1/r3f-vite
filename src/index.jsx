import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import AppCanvas from './js/components/AppCanvas'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AppCanvas />
  </React.StrictMode>
)

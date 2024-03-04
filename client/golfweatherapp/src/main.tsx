import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Search from './Search.tsx'
import Title from './Title.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title />
    <Search />
  </React.StrictMode>,
)

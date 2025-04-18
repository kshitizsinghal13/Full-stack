import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProps from './AppProps.jsx'
import AppContext from './AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AppContextpContext />
  </StrictMode>,
)

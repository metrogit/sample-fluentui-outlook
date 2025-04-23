import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeIcons } from '@fluentui/react'
import './styles/fonts.css'
import './styles/selection.css'
import './index.css'
import App from './App.tsx'

// Initialize Fluent UI icons
initializeIcons()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

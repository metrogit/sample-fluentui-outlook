import { useState, useEffect } from 'react'
import './App.css'
import MainLayout from './components/layouts/MainLayout'
import { darkTheme, lightTheme, getInitialThemeMode, applyThemeToDocument } from './utils/theme'

function App() {
  const [currentView, setCurrentView] = useState('mail')
  const [isDarkMode, setIsDarkMode] = useState(getInitialThemeMode)

  // Set the current theme
  const theme = isDarkMode ? darkTheme : lightTheme

  // Save theme preference to localStorage and apply theme class
  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode.toString())
    applyThemeToDocument(isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <MainLayout 
      currentView={currentView}
      setCurrentView={setCurrentView}
      isDarkMode={isDarkMode}
      toggleTheme={toggleTheme}
      theme={theme}
    />
  )
}

export default App

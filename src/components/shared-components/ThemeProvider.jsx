"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create a context for theme
const ThemeContext = createContext({
  theme: "light",
  setTheme: () => null,
})

// Theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("farm-monitor-theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  // Update theme in localStorage and apply CSS classes when theme changes
  useEffect(() => {
    localStorage.setItem("farm-monitor-theme", theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

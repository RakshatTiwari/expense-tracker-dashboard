import React, { createContext, useState, useEffect } from 'react'

export const mainContext = createContext()

export const MainContextAPI = ({ children }) => {
    
    const [allExpenses, setAllExpenses] = useState(JSON.parse(localStorage.getItem("expense")) || [])

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

  return (
    <mainContext.Provider value={{ allExpenses, setAllExpenses, darkMode, setDarkMode }}>
      {children}
    </mainContext.Provider>
  )
}


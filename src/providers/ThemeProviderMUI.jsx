import { useState, createContext, useEffect } from "react"
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'

const my_Theme = createTheme({
    palette:{
        mode: mode ? "dark" : "light",
    },
});

export const ThemeChange = ({ children }) => {
    const [mode, setMode] = useState('light');

    
    
    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeChange
import { useState } from "react"
import { ThemeContext } from './ThemeContext'

function ThemeProvider ({ children }) {
    const [dark, setDark] = useState(false)

    const toggle = () => {
        setDark(!dark)
    }

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
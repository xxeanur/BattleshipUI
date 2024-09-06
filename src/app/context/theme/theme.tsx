import React, { createContext, ReactNode, useContext, useState } from 'react'
import lightTheme from '../../resources/themes/light'
import darkTheme from '../../resources/themes/dark'

interface ThemeProps {
    children?: ReactNode;
}

const themeContext = createContext({
    theme: darkTheme,
    changeTheme: (theme: string) => { }
});

const useThemeContext = () => useContext(themeContext);

function Theme({ children }: ThemeProps) {
    const [theme, setTheme] = useState(lightTheme);

    const changeTheme = (theme: string) => {
        theme === "true" ? setTheme(lightTheme) : setTheme(darkTheme);
    }

    return (
        <themeContext.Provider value={{ theme , changeTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export { Theme, useThemeContext }
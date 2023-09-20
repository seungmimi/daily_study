import React, { createContext, useState } from 'react';
import ThemeComponent from './components/ThemeComponent';
import ThemeSwitch from './components/ThemeSwitch';

const ThemeContext = createContext();

function DarkMode() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        //이전 상태값을 사용하는 방식
        setTheme((prevTheme)=>{
            return prevTheme === "light" ? "dark" : "light"
        })
    }

    return (
    <div>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeComponent />
            <ThemeSwitch />
        </ThemeContext.Provider>

    </div>
    );
}

export { ThemeContext, DarkMode }
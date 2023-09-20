import React, { useContext } from 'react';
import { ThemeContext } from '../DarkMode';

function ThemeSwitch() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button type='button' onClick={toggleTheme}>테마 전환</button>
    );
}

export default ThemeSwitch;
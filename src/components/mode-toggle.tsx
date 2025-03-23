"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ModeToggle = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button onClick={toggleTheme} className="p-2">
        {currentTheme === 'dark' ? <Moon /> : <Sun />}
        </button>
    );
};

export default ModeToggle;

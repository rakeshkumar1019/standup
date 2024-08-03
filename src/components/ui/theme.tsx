'use client'
import { useState, useEffect } from "react"
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button";
export default function Theme() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            if (storedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    return (
        <Button
            onClick={toggleTheme}
            variant='outline'
            className="p-2 rounded-full border-0"
        >
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};
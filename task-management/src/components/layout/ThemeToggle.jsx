'use client'
import moonIcon from "@/assets/moon-icon.svg"
import sunIcon from "@/assets/sun-icon.svg"
import { requestToBodyStream } from "next/dist/server/body-streams";
import Image from "next/image";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(handleUserPreference);

    useEffect(() => {
        if(localStorage.getItem("prefered color theme")){
            setIsDark(localStorage.getItem("prefered color theme")==="dark"?true:false)
        }
        else{
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
    
            prefersDark.addEventListener("change", (e) =>setIsDark(e.matches));
    
            return () => {
                prefersDark.removeEventListener("change", (e) => setIsDark(e.matches));
            };
        }
    }, []);

    function handleUserPreference(){
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        if (prefersDark.matches) {
            return true;
        }else{
            return false;
        }
    }

    function handleThemeChange(event) {
        event.preventDefault();
        setIsDark((prevIsDark) => {
            const newIsDark = !prevIsDark;
            localStorage.setItem("prefered color theme",newIsDark?"dark":"light")
            return newIsDark;
        });
    }

    let sliderClasses = "bg-white size-8 rounded-full top-1 left-1 absolute transition-all"

    if (!isDark) {
        sliderClasses += " translate-x-10"
    }

    const activeIcon = "z-10 transition-all scale-110 drag-none"
    const inactiveIcon = "z-10 opacity-40 transition-all drag-none"

    return (
        <label onClick={handleThemeChange} className="cursor-pointer glassy select-none  h-10 w-20 translate-x-10 rounded-full inline-block p-3 flex justify-between relative active:scale-[0.97]">
            <input className="hidden" type="checkbox" id="themeToggle" />
            <div className={sliderClasses}></div>
            <Image src={moonIcon} alt="light mode" width={16} className={isDark ? activeIcon : inactiveIcon} />
            <Image src={sunIcon} alt="dark mode" width={16} className={isDark ? inactiveIcon : activeIcon} />
        </label>
    );
};

export default ThemeToggle;
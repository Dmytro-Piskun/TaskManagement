'use client'
import moonIcon from "@/assets/moon-icon.svg"
import sunIcon from "@/assets/sun-icon.svg"
import Image from "next/image";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { themeActions } from "@/lib/features/ui/theme-slice";

const ThemeToggle = () => {
    const theme = useSelector(state=>state.theme)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!localStorage.getItem("prefered color theme")){
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
    
            prefersDark.addEventListener("change", (e) =>dispatch(themeActions.handleThemeChange({isDark:e.matches})));
    
            return () => {
                prefersDark.addEventListener("change", (e) =>dispatch(themeActions.handleThemeChange({isDark:e.matches})));
            };
        }
        else{
            
            dispatch(themeActions.handleThemeChange({isDark:localStorage.getItem("prefered color theme")==="dark"?true:false})) 
        }
    }, []);


    function handleThemeChange(event) {
        event.preventDefault();
        localStorage.setItem("prefered color theme",theme==="dark"?"light":"dark");
        dispatch(themeActions.handleThemeChange({isDark:theme==="light"?true:false}));
    }

    let sliderClasses = "bg-white size-8 rounded-full top-1 left-1 absolute transition-all"

    if (theme==="light") {
        sliderClasses += " translate-x-10"
    }

    const activeIcon = "z-10 transition-all scale-110 drag-none"
    const inactiveIcon = "z-10 opacity-40 transition-all drag-none"

    return (
        <label onClick={handleThemeChange} className="cursor-pointer glassy select-none  h-10 w-20 translate-x-10 rounded-full inline-block p-3 flex justify-between relative active:scale-[0.97]">
            <input className="hidden" type="checkbox" id="themeToggle" />
            <div className={sliderClasses}></div>
            <Image src={moonIcon} alt="light mode" width={16} className={theme==="dark" ? activeIcon : inactiveIcon} />
            <Image src={sunIcon} alt="dark mode" width={16} className={theme==="dark" ? inactiveIcon : activeIcon} />
        </label>
    );
};

export default ThemeToggle;
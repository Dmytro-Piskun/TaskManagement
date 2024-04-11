'use client'
import moonIcon from "@/assets/moon-icon.svg"
import sunIcon from "@/assets/sun-icon.svg"
import Image from "next/image";
import { useState, useLayoutEffect } from "react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useLayoutEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        if (prefersDark.matches) {
            setIsDark(true);
        }

        prefersDark.addEventListener("change", (e) => setIsDark(e.matches));

        return () => {
            prefersDark.removeEventListener("change", (e) => setIsDark(e.matches));
        };
    }, []);

    function handleThemeChange(event) {
        event.preventDefault();
        setIsDark((prevIsDark) => {
            const newIsDark = !prevIsDark;
            return newIsDark;
        });
    }

    let sliderClasses = "bg-white size-10 rounded-full top-1 left-1 absolute has-[:checked]:bg-blue-500 transition-all"

    if (!isDark) {
        sliderClasses += " translate-x-10"
    }

    return (<>
        <label onClick={handleThemeChange} className="bg-slate-100 h-12 w-[5.5rem] rounded-full inline-block p-3 has-[:checked]:bg-red-100 flex justify-between relative active:scale-[0.97]">
            <input className="hidden" type="checkbox" id="themeToggle" />
            <div className={sliderClasses}></div>
            <Image src={moonIcon} alt="light mode" width={22} className="z-10" />
            <Image src={sunIcon} alt="dark mode" width={22} className="z-10" />
        </label>
    </>
    );
};

export default ThemeToggle;
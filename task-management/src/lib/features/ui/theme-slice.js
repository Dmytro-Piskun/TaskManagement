'use client'
import { createSlice } from '@reduxjs/toolkit'

function handleUserPreference() {
    if (!localStorage.getItem("prefered color theme")){
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        if (prefersDark.matches) {
            return "dark";
        } else {
            return "light";
        }
    }
    else {
        return localStorage.getItem("prefered color theme")
    }
}

const themeSlice = createSlice({
    name: "theme",
    initialState: handleUserPreference(),
    reducers: {
        handleThemeChange(state, action) {
            if (action.payload.isDark) {
                return state = "dark";
            }
            else {
                return state = "light"
            }
        }
    }
})

export const themeActions = themeSlice.actions;

export default themeSlice;
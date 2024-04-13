'use client'
import { configureStore } from '@reduxjs/toolkit'
import themeSlice from "./features/ui/theme-slice";

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
  })

export default store
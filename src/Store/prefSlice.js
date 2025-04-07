import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    currentLang: 'en',
    currentTheme: 'dark'
}

export const prefSlice = createSlice({
    name: 'preferences',
    initialState, 
    reducers: { 
        changeLang: (state) => { 
            state.currentLang = state.currentLang === 'en' ? 'ar' : 'en'; 
        },
        changeTheme: (state) => { 
            state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
        }
    }
})

export const {changeLang, changeTheme} = prefSlice.actions;
export default prefSlice.reducer
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import prefReducer from './prefSlice'

const persistConfig = { 
    key: 'root',
    storage , 
}

const persistedReducer = persistReducer(persistConfig, prefReducer)

export const store = configureStore({
    reducer: {
        preferences: persistedReducer
    }
})

export const persistor = persistStore(store);
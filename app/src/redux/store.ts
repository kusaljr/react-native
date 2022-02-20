import {configureStore } from '@reduxjs/toolkit'
import detailReducer from './slices/detailSlice'
const store = configureStore({
    reducer: {
        detail: detailReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

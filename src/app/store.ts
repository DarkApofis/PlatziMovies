import { configureStore } from "@reduxjs/toolkit"
import { apiData } from "../features/apiData/apiData.slice"

export const store = configureStore({
    reducer: {
        [apiData.reducerPath]: apiData.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiData.middleware)
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
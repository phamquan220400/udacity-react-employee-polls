import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducer/combine";
import authMiddleware from "./middleware/authMiddleware";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
});

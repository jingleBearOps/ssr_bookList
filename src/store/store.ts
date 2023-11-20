import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";


export const store = configureStore({
    // root reducer
    reducer: {
    }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import bookReducer from './book.slice'

export const store = configureStore({
    // root reducer
    reducer: {
        // reducers
        book: bookReducer
    }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

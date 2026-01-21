import {configureStore} from "@reduxjs/toolkit";
import {codeReducer} from "../features/pinCodeSlice.ts";

export const store = configureStore({
    reducer: {
        code: codeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
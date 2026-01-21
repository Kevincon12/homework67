import type {PinCodeState} from "../types";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const initialState: PinCodeState = {
    enteredPin: '',
    status: "idle",
}

export const codeSlice = createSlice({
    name:'code',
    initialState,
    reducers: {
        addCode(state, action: PayloadAction<string>) {
            if (state.enteredPin.length < 4) {
                state.enteredPin += action.payload;
            }
        },
        removeCode(state) {
            state.enteredPin = state.enteredPin.slice(0, -1);
        },
    }
});

export const codeReducer = codeSlice.reducer;
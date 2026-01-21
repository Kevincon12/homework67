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
        }

    }
});

export const codeReducer = codeSlice.reducer;
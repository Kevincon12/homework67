export interface PinCodeState {
    enteredPin: string;
    status: "idle" | "success" | "error";
}
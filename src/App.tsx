import './App.css';
import {useDispatch, useSelector} from "react-redux";
import type { RootState } from "./app/store.ts";
import { addCode, removeCode, checkPin } from "./features/pinCodeSlice";

const App = () => {
    const enteredPin = useSelector((state: RootState) => state.code.enteredPin);
    const status = useSelector((state: RootState) => state.code.status);

    const dispatch = useDispatch();

    return (
        <>
            <div className='d-flex mt-4 flex-column align-items-center'>

                <div
                    className={`d-flex justify-content-center align-items-center mb-3 border rounded p-2 text-center fw-bold
                        ${status === "success" ? "bg-success text-white border-success" :
                        status === "error" ? "bg-danger text-white border-danger" :
                            "bg-warning text-dark border-warning"}`}
                    style={{
                        width: 'max-content',
                        minWidth: '200px',
                        fontSize: '28px',
                        letterSpacing: '8px',
                        padding: '12px'
                    }}
                >
                    {"*".repeat(enteredPin.length)}
                </div>

                <div className='m-3 fw-bold'>
                    {status === "success" && <span className="text-success">Access granted</span>}
                    {status === "error" && <span className="text-danger">Access denied</span>}
                </div>

                <div className='d-grid gap-2' style={{gridTemplateColumns: 'repeat(3, 60px)'}}>
                    {[7, 8 , 9, 4, 5, 6, 1, 2, 3].map((number) => (
                        <button key={number} className="btn btn-primary" onClick={() => dispatch(addCode(number.toString()))}>
                            {number}
                        </button>
                    ))}
                    <button className="btn btn-warning" onClick={() => dispatch(removeCode())}>⌫</button>
                    <button className="btn btn-primary" onClick={() => dispatch(addCode("0"))}>0</button>
                    <button className="btn btn-success" onClick={() => dispatch(checkPin())}>E</button>
                </div>
            </div>
        </>
    );
};

export default App;

import React, { useReducer } from "react";
import './Calculation.css';

const initialState = { num1: "", num2: "", operator: "+", result: "" };

function reducer(state, action) {
    switch (action.type) {
        case "SET_NUM1":
            return { ...state, num1: action.payload };
        case "SET_NUM2":
            return { ...state, num2: action.payload };
        case "SET_OPERATOR":
            return { ...state, operator: action.payload };
        case "CALCULATE":
            const num1 = parseFloat(state.num1) || 0;
            const num2 = parseFloat(state.num2) || 0;
            const result = state.operator === "+" ? num1 + num2 : num1 - num2;
            return { ...state, result };
        default:
            return state;
    }
}

export default function Calculation() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
                    Simple Calculator
                </h2>

                <div className="flex justify-between mb-4">
                    <input
                        type="number"
                        className="p-3 border rounded-lg w-1/3 text-center text-lg outline-none bg-black"
                        placeholder="0"
                        value={state.num1}
                        onChange={(e) => dispatch({ type: "SET_NUM1", payload: e.target.value })}
                    />
                    <select
                        className="p-3 border rounded-lg text-lg bg-black"
                        value={state.operator}
                        onChange={(e) => dispatch({ type: "SET_OPERATOR", payload: e.target.value })}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input
                        type="number"
                        className="p-3 border rounded-lg w-1/3 text-center text-lg outline-none bg-black"
                        placeholder="0"
                        value={state.num2}
                        onChange={(e) => dispatch({ type: "SET_NUM2", payload: e.target.value })}
                    />
                </div>

                <button
                    className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-semibold transition bg-black"
                    onClick={() => dispatch({ type: "CALCULATE" })}
                >
                    Calculate
                </button>

                <input
                    type="text"
                    className="mt-4 p-3 border rounded-lg w-full text-center text-lg font-bold bg-rose-600"
                    value={state.result}
                    readOnly
                />
            </div>
        </div>
    );
}

import React, {createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const InitialState = {
    transactions:[
    //{ id: 1, text: 'Flower', amount: -20 },
    //   { id: 2, text: 'Salary', amount: 300 },
    //   { id: 3, text: 'Book', amount: -10 }, // income positive number
    //   { id: 4, text: 'Camera', amount: 150 } // expense negative number
    ]
}

// Create context
export const GlobalContext = createContext(InitialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>) // this is whatever we wrapped


}
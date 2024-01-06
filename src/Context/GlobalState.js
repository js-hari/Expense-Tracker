import React,{ createContext, useReducer } from "react";
import AppReducer from './AppReducer'

//Initial State
const initialsate = {
    transactions: []
}



//create context

export const GlobalContext = createContext(initialsate);

//provider component
export const GlobalProvider = ({ children  }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialsate);


//Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE TRANSACTION',
            payload: id
        })
    }


    function addTransaction(transaction){
        dispatch({
            type: 'ADD TRANSACTION',
            payload: transaction
        })
    }




    return (<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState={
    transactions:[
    {id:1, text:'Tv', amount: -20},
    {id:2, text:'Fridge', amount: 50},
    {id:3, text:'Book', amount: -10},
    {id:4, text:'Camera', amount: 120},
]}

export const GlobalContext=createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id,
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
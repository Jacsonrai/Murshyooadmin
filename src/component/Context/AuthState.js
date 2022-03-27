import React,{useReducer} from 'react'
import {AuthContext} from './AuthContext'
import Reducer from './Reducer'

const initialState={
    isAuth:false
}
const AuthState=({children})=>{
    const[state,dispatch]=useReducer(Reducer,initialState)
    const login=()=>{
        dispatch({
            type:"LOGIN"
        })
    }
    const logout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
    return<AuthContext.Provider value={{
        ...state,login,logout
    }}>
        {children}
    </AuthContext.Provider>
}
export {AuthState}
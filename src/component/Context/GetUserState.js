import axios from "axios";
import React,{useReducer} from "react";
import { Api } from "../../Api/Api";
import {GetUserContext} from './GetUserContext'
import GetUserReducer from "./GetUserReducer";



const initialState={
    isLoading:false,
    userData:'',
    productData:''
}
const GetUserState=({children})=>{
    const[state,dispatch]=useReducer(GetUserReducer,initialState)
    const getUser=async(token)=>{
        const headers={
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }
        await axios.get(Api.getUser,{
            headers:headers
        }).then(function(response){
            dispatch({
                type:"GETUSER",
                payload:response
            })
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }
    const deleteUser=async(token,id)=>{
        const headers={
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }
        await axios.delete(`${Api.deleteUser}/${id}`,{
            headers:headers
        }).then(function(response){
            dispatch({
                type:"DELETEUSER",
                })
            
      
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }
    const getProduct=()=>{
        const headers={
            'Content-Type': 'application/json',
           
        }
        axios.get(Api.getProduct,{
            headers:headers
        }).then(function(response){
            dispatch({
                type:"GETPRODUCT",
                payload:response
            })
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })

    }
    return <GetUserContext.Provider value={{
        ...state,getUser,getProduct,deleteUser
    }}>
    {children}
    </GetUserContext.Provider>

}
export {GetUserState}
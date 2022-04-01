const GetUserReducer=(state,action)=>{
const{payload,type}=action
switch(type){
    case "GETUSER":
        return {...state,userData:payload,isLoading:true}
    case "GETPRODUCT":
        return {...state,productData:payload}
    case "DELETEUSER":
            return {...state,isLoading:false}
    default:
        return state
}
}
export default GetUserReducer
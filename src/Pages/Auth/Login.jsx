import { useContext } from 'react'
import { AuthContext } from '../../component/Context/AuthContext'
import InputField from '../../component/InputField/InputField'
import './login.scss'
const Login=()=>{
  const{login}=useContext(AuthContext)
    const handleLogin=()=>{
     login()
    }
return(
    <div className="loginContainer">
        <div className="container">
       
            <div className="mainContainer">
            <h3 style={{color:"white",textAlign:"center",fontWeight:"bold"}}>Welcome back!</h3>
                <form>
                    <div>
                    <InputField name={"Email"}/>
                    </div>
                    <div>
                    <InputField name={"Password"}/>
                    </div>
                    <div className='loginBtnContainer'>
                    <button onClick={handleLogin} className='loginBtn'>
                        login
                    </button>
                    </div>
                   
                   
                </form>

            </div>

        </div>

    </div>
)
}
export default Login
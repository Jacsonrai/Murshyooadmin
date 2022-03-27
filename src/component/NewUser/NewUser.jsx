import './newuser.scss'

import {FaUserFriends} from 'react-icons/fa'
import { userDetails } from '../../global/DummyData'
const NewUser=()=>{
return(
 <div className="userContainer">
     <div className="container">
         {userDetails?.map((item,index)=>(
              <div className="mainContainer" key={index}>
              <div className="iconContainer">
               <figure className='iconFigure'>
                  <FaUserFriends fontSize={30}/>
               </figure>
              </div>
              <div className="userDetails">
                  <h6 className='userText'>{item.email}</h6>
                  <h6 className='userText'>{item.contact}</h6>
                  <h6 className='userText'>{item.address}</h6>
               </div>
             
          </div>

         ))}
        

     </div>

</div>)
}
export default NewUser
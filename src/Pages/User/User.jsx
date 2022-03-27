import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb";

import "./user.scss";
import { userDetails } from "../../global/DummyData";
import {AiFillDelete} from 'react-icons/ai'
const User = () => {

  return (
    <div className="usersContainer">
      <div className="container">
        <BreadCrumbs item1={"Dashboard"} activeItem="user" itemUrl={"/"} />
        <h4 className="usersTitle">User collections</h4>
        <div className="mainContainer">
          <div className="usersDetailsContainer">
            <table>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            
                  {userDetails?.map((item,index)=>(
                        <tr>
                       <td>{item.name}</td>
                       <td>{item.address}</td>
                       <td>{item.contact}</td>
                       <td>{item.email}</td>
                       <td>{item.role}</td>
                       <td style={{paddingLeft:20}}><AiFillDelete fontSize={26} color="gray"/></td>
                       </tr>
                  ))}
               
             
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;

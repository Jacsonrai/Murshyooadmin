

import { useContext, useEffect, useState } from "react";
import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb";
import { GetUserContext } from "../../component/Context/GetUserContext";
import TopSell from "../../component/TopSell/TopSell";
import "./orders.scss";


const Orders = () => {
  const{getOrder,orderData}=useContext(GetUserContext)
  const[data,setData]=useState()
  
  useEffect(()=>{
    getOrder()
  },[])
  const{orders}=orderData
  console.log(orders)

  useEffect(()=>{
    orders?.map((each)=>(
      setData(JSON.parse(each?.orderItems)))
    )
  },[orders])

  

 
 
  return (
    <div className="ordersContainer">
      <div className="container">
        <BreadCrumbs item1={"Dashboard"} activeItem="Orders" itemUrl={'/'}/>
        <h4 className="ordersTitle">ORDERS</h4>
        <div className="mainContainer">
          <div className="orderMainContainer">
            <h4 className="orderTitle">New Orders</h4>
            <div className="orderTable">
              <table>
                <tr>
                  <th className="headContainer">client id</th>
                  <th className="headContainer">contact</th>
                  <th className="headContainer">address</th>
                  <th className="headContainer">Student id</th>
                  <th className="headContainer">product id</th>
                  <th className="headContainer">product price</th>
                  <th className="headContainer">product quantity</th>
                </tr>
              {orders?.map((each,index)=>(
                   <tr>
                   <td>{each.name}</td>
                   <td>{each.contact}</td>
                   <td>{each.address}</td>
                   <td></td>
                   {data?.map((each)=>(
                     <>
                       <td>{each.product}</td>
                       <td>{each.price}</td>
                       <td>{each.quantity}</td>
                     </>
                    
                   ))}
                 
          
    
                     
                  
                   
                 </tr>
              ))}
              
              </table>
            </div>
          </div>
          <div className="rightContainer">
            <h5 className="title">Top Order product</h5>
            <TopSell />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Orders;

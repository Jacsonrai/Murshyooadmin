import image from '../../Assets/home.png'
import {FaUserFriends} from 'react-icons/fa'
import {RiLuggageCartFill} from 'react-icons/ri'
import { productData, userDetails } from '../../global/DummyData'

import './dashboard.scss'
import TopSell from '../../component/TopSell/TopSell'
import NewUser from '../../component/NewUser/NewUser'
import { useContext, useEffect, useState } from 'react'
import { GetUserContext } from '../../component/Context/GetUserContext'

import PieCharts from '../../component/PieChart/PieChart'
import BarCharts from '../../component/PieChart/BarGraph'

const Dashboard=()=>{
    const{getUser,getOrder,userData,orderData}=useContext(GetUserContext)
    const[datas,setDatas]=useState()
    const[orderss,setOrderss]=useState()
    const[data,setData]=useState()
    useEffect(()=>{
        const data=localStorage.getItem('userDetails')
        const {token}=JSON.parse(data)
        getUser(token)   
    },[])
console.log('orderLength',orderss)
    useEffect(()=>{
        getOrder()
      },[])
    // useEffect(()=>{
    //     orders?.map((each)=>(
    //       setData(JSON.parse(each?.orderItems)))
    //     )
    //   },[orders])
    useEffect(()=>{
        const value= userData?.data?.user?.length
        console.log(value)
        setDatas(value)
 
       },[userData])

       useEffect(()=>{
        const value=orderData?.orders?.length
        console.log(value)
        setOrderss(value)
 
       },[orderData])
    
    return(
    <div className="dashboard-container">
        <div className="container">
            <div className="top-main-container">
             <div className='image-container'>
                
           
             <div className='pieChatDetailsContainer'>
             <div className='daigram'>
             {/* <PieCharts/> */}
             <BarCharts/>
           
             </div>
             
             {/* <div className='chartDetails'>
                 <div className='chartDetailsContainer'>
                 <div className='colorContainer'></div>
                  <h6 className='userDiagramtext'>Register</h6>
                 </div>
                 <div className='chartDetailsContainer'>
                  <div className='colorContainer2'></div>
                  <h6 className='userDiagramtext'>Unregister</h6>
                  </div>
             
             </div> */}
               
             </div>
             </div>
              <div className="info-container">
                  <div className='info-detail-container1'>
                   <FaUserFriends fontSize={55} color="white"/>
                   <h2 className='info-text'>{datas===undefined?0:datas}</h2>
                  </div>
                  <div className='info-detail-container2'>
                   <RiLuggageCartFill fontSize={55} color="white"/>
                   <h2 className='info-text'>{orderss===undefined?0:orderss}</h2>
                  </div>
                  

             </div>

            </div>
            <div className="bottom-main-container">
                <div className='rightContainer'>
               <h3 className='topSellTitle'>Recent added</h3>
                <TopSell/>
                </div>
                <div className='userDetailContainer'>
                    <h3 className='userTitle'>New Users</h3>
                    <NewUser/>

                </div>
               
                  </div>


        </div>

    </div>)
    }
export default Dashboard
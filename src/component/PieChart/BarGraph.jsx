// import "./styles.css";
import React, { useContext, useEffect, useState } from "react";

import { GetUserContext } from "../Context/GetUserContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function BarCharts() {
    const{getUser, getOrder,orderData,userData,getProduct,productData}=useContext(GetUserContext)
    const[token,setToken]=useState('')
    const[datas,setDatas]=useState()
    const[productDatas,setProductDatas]=useState()
    const[orderDatas,setOrderDatas]=useState()
    const[orderss,setOrderss]=useState()
    const data = [
        {
          name: "User",
        
          pv: datas,
          amt: 2400
        },
        {
          name: "Order",
          
          pv:orderss,
          amt: 2210
        },
        {
          name: "Product",
          
          pv:productDatas,
          amt: 2290
        },
       
      ];
      
    useEffect(()=>{
        const data=localStorage.getItem('userDetails')
        const {token}=JSON.parse(data)
        setToken(token)
        getUser(token)
        getOrder()
        getProduct()
      },[])
      useEffect(()=>{
       const value= userData?.data?.user?.length
       const productValue= productData?.data?.product?.length
       setProductDatas(productValue)
       setDatas(value)

      },[userData])
      const{orders}=orderData
      useEffect(()=>{
        orders?.map((each)=>(
          setOrderDatas(JSON.parse(each?.orderItems)))
        )
      },[orders])
      useEffect(()=>{
        const value=orderDatas?.length
        console.log(value)
        setOrderss(value)
 
       },[userData])
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}
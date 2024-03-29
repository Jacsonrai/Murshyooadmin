import React, { useContext, useEffect, useState } from "react";
import { PieChart, Pie,  Cell, } from "recharts";
import { GetUserContext } from "../Context/GetUserContext";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



const PieCharts= () => {
    const{getUser,userData,getProduct,productData}=useContext(GetUserContext)
    const[token,setToken]=useState('')
    const[datas,setDatas]=useState()
    const[productDatas,setProductDatas]=useState()
    useEffect(()=>{
        const data=localStorage.getItem('userDetails')
        const {token}=JSON.parse(data)
        setToken(token)
        getUser(token)
        getProduct()
      },[])
      useEffect(()=>{
       const value= userData?.data?.user?.length
       const productValue= productData?.data?.product?.length
       console.log('product',productValue)
       setDatas(value)
       setProductDatas(productValue)

      },[])

    const data = [
        { name: "Group A", value: datas },
        { name: "Group B", value:10},
       
      ];
  return (
    <PieChart width={500} height={300} >
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    
    </PieChart>
  );
};
export default PieCharts

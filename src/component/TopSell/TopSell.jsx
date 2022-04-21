import './topsell.scss'

import { useContext, useEffect,useState } from 'react'
import { GetUserContext } from '../Context/GetUserContext'

const TopSell=()=>{
    const{getProduct,productData}=useContext(GetUserContext)
    console.log('product',productData)
    const[data,setData]=useState()
    useEffect(()=>{
        getProduct()
    },[])
    console.log('happy',data)
//     const[dataLatest]=useState(productData?.data?.product?.slice(0,50))
//   const[pageNumber,setPageNumber]=useState(0)
//   const dataPerPage=5
//   const pageVisited=pageNumber*dataPerPage
//   const displayData=dataLatest.slice(pageVisited,pageVisited+dataPerPage)
//   console.log('data',dataLatest&&dataLatest)

  
return(
 <div className="topSellContainer">
     <div className="container">
         {productData?.data?.product?.map((item,index)=>(
              <div className="mainContainer" key={index}>
              <div className="imageContainer">
               <figure>
                   <img src={item.productPicture} alt="productImage" className="image"/>
               </figure>
              </div>
              <div className="productDetails">
                  <h4>{item.name}</h4>
                  <h6>the product is one of best</h6>
               </div>
              <div className="productPrice">
                 <h5>RS,{item.price}</h5>
              </div>
 
          </div>

         ))}
        

     </div>

</div>)
}
export default TopSell
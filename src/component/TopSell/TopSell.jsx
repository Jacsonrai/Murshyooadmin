import './topsell.scss'
import { productData } from '../../global/DummyData'
const TopSell=()=>{
return(
 <div className="topSellContainer">
     <div className="container">
         {productData?.map((item,index)=>(
              <div className="mainContainer" key={index}>
              <div className="imageContainer">
               <figure>
                   <img src={item.img} alt="productImage" className="image"/>
               </figure>
              </div>
              <div className="productDetails">
                  <h4>{item.product}</h4>
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
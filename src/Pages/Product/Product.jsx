import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb"
import InputField from "../../component/InputField/InputField"
import './product.scss'
const Product=()=>{
    return(
        <div className="productContainer">
            <div className="container">
                <BreadCrumbs item1={"Dashboard"} activeItem={"Prodcut"} itemUrl="/"/>
                <h4 className="productTitle">Product</h4>
                <div className="mainContainer">
                    <form>
                        <div className="formContainer">
                        <div>
                        <InputField name="Price" type={"number"}/>
                        </div>
                        <div>
                        <InputField name="Product Name" type={"text"}/>
                        </div>
                        <div>
                        <InputField name="Category" type={"text"}/>
                        </div>
                        <div>
                        <InputField name="Quantity" type={"number"}/>
                        </div>
                        <div>
                           <InputField name="Product Image" type={"file"}/>
                        </div>
                        </div>
                       <div className="btnContainer">
                       <button className="submitBtn">Submit</button>
                       </div>
                        
                       
                    </form>
                </div>

            </div>

        </div>
    )
    }
export default Product
import { Field, Formik } from "formik";
import { Form } from "react-bootstrap";
import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb";
import InputField from "../../component/InputField/InputField";
import StyledDropzone from "../../component/StyleDropzone/StyleDropzone";
import "./product.scss";
const Product = () => {
  const initialValue = {
    name: "",
    quantity: "",
    promoCode: "",
    price: "",
    productPicture: "",
    category: "",
  };
  return (
    <div className="productContainer">
      <div className="container">
        <BreadCrumbs item1={"Dashboard"} activeItem={"Prodcut"} itemUrl="/" />
        <h4 className="productTitle">Product</h4>
        <div className="mainContainer" style={{width:"50%"}}>
          <Formik initialValues={initialValue}>
            <Form autoComplete={false}
            style={{display:"flex",flexWrap:"wrap",gap:10,padding:10}}
            >
              <div className="inputContainer">
                <Field
                  type="text"
                  name="name"
                  placeholder="Product Title"
                  className="inputField"
                />
              </div>
              
              <div className="inputContainer">
                <Field
                  type="text"
                  name="price"
                  placeholder="Product Price"
                  className="inputField"
                />
              </div>
                   
              <div className="inputContainer">
                <Field
                  type="text"
                  name="price"
                  placeholder="PromoCode"
                  className="inputField"
                />
              </div>
             <div className="inputContainer">
                <Field
                  type="text"
                  name="category"
                  placeholder="Product Category"
                  className="inputField"
                />
              </div>
              <div className="inputContainer">
           <StyledDropzone/>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Product;


import { useContext, useEffect, useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";

import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb";
import { GetUserContext } from "../../component/Context/GetUserContext";

import StyledDropzone from "../../component/StyleDropzone/StyleDropzone";
import { modelValidSchema} from "../../component/validator/validationSchema";


const Model = () => {
  const [file, setFile] = useState(null);
  const{createModel}=useContext(GetUserContext)

  const[token,setToken]=useState('')
  const initialValue = {
    name: "",
    description:"",
    email: "",
  
   
  };

  
 
  useEffect(()=>{
    const data=localStorage.getItem('userDetails')
        const {token}=JSON.parse(data)
        setToken(token) 
   
  },[])

  
  
 


  const handleSubmit=(values)=>{
    const datas={...values,file}
    console.log(datas)
    
    // createProduct(datas,token)
    createModel(datas,token)
  }
  return (
    <div className="productContainer">
      <div className="container">
        <BreadCrumbs item1={"Dashboard"} activeItem={"Model"} itemUrl="/" />
        <h4 className="productTitle">Create Model</h4>
        <div className="mainContainer" style={{ width: "100%" }}>
          <Formik
            initialValues={initialValue}
            validationSchema={modelValidSchema}
            onSubmit={(values)=>handleSubmit(values)}
          >
            <Form
              autoComplete={false}
              style={{
                display: "grid",
                gap: 20,
                padding: 10,
                gridTemplateColumns: "1fr 1fr",
              }}
              encType="multipart/form-data"
            >
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Model Name"
                  className="inputField"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="name" />
                </p>
              </div>

             

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="inputField"
                />
                 <p style={{ color: "red" }}>
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div>
            <Field
            as='textarea'
            name="description"
            style={{height:200,width:"100%"}}
            placeholder="Description"
            />
             <p style={{ color: "red" }}>
                  <ErrorMessage name="description" />
                </p>
                  
              </div>
              
              <div className="imageContainer">
                <StyledDropzone setFile={setFile} />
              </div>
              <div>
                <button className="formSubmit" type='submit'>
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Model;

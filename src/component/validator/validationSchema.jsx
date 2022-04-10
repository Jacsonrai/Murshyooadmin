import * as yup from 'yup';

export const LoginValidSchema=yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required')
   
  });
export const ProductValidSchema=yup.object().shape({
  name: yup.string().required('Product name is required'),
  price: yup.number().required('price is required'),
 
  
 
});
export const modelValidSchema=yup.object().shape({
  name: yup.string().required('Model name is required'),
  email: yup.string().required('Model email is required'),
  description: yup.string().required('Model email is required'),
 
  
 
});
import * as yup from 'yup';

export const LoginValidSchema=yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required')
   
  });
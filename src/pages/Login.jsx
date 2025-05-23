import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const loginUser = async(values)=>{
    try{
      const response =  await axios.post("https://blog-hqx2.onrender.com/user/login", values)
   toast.success("Login Successfully")
   const token = response.data.token
   const user = response.data.user
   login(token, user)
   navigate("/blog")
        }
        
        catch (error){
            toast.error("Login Unsuccessful")
            console.log(error);
        }
    }
  return (
    <Formik initialValues={{
            email:'',password:''
        }}
        validationSchema={
            Yup.object({
                email: Yup.string().email().required("Email name is required"),
                password: Yup.string().min(6,"Atleast 6 charcters").required("password is required")
            })
        }
        onSubmit={(values) =>{
           loginUser(values)
        }}
        >
    <Form className='flex flex-col gap-y-5 w-96 mt-25 mx-auto border-black p-6 rounded shadow-md '>
    
        <label htmlFor='email'>Email</label>
        <Field name="email" type="email" placeholder="Enter your Email" className='border-black w-full border rounded-2xl px-2 py-1'/>
        <ErrorMessage name='email'  component="div" className="text-red-600 text-sm"/>
    
        <label htmlFor='password'>Password</label>
        <Field name="password" type="text" placeholder="Enter the password" className='border-black w-full border rounded-2xl px-2 py-1'/>
        <ErrorMessage name='password' component="div" className="text-red-600 text-sm"/>
        <ToastContainer/>
        <button type='submit' className="bg-blue-500 text-white py-2 rounded-4xl mx-auto  h-12 w-20 hover:bg-red-600"
        >Log in</button>
    </Form>
        </Formik>
  )
}

export default Login
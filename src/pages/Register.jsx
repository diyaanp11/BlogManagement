import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";

const Register = () => {
//    const formFields = [
//   {
//     type: "text",
//     name: "name",
//     placeholder: "Enter your name",
//     label: "Username",
//   },
//   {
//     type: "email",
//     name: "email",
//     placeholder: "Enter your Email",
//     label: "Email",
//   },

//   {
//     type: "password",
//     name: "password",
//     placeholder: "Enter Password",
//     label: "Password",
//   },
const postFormData = async(values)=>{
    try{
        await axios.post("https://blog-hqx2.onrender.com/user/register", values)
   toast.success("User Registered Successfully")
        }
        
        catch (error){
            toast.error("User Register Unsuccessfully")
            console.log(error);
        }
    }
  return (
    <Formik initialValues={{
        name:'',email:'',password:''
    }}
    validationSchema={
        Yup.object({
            name: Yup.string().min(3,"Minimum 3 charcters").required("Username is required"),
            email: Yup.string().email().required("Email name is required"),
            password: Yup.string().min(6,"Atleast 6 charcters").required("password is required")
        })
    }
    onSubmit={(values) =>{
       postFormData(values)
    }}
    >
<Form className='flex flex-col gap-y-5 w-96 mt-25 mx-auto border-black p-6 rounded shadow-md '>
    <label htmlFor='name' className='font-bold'>Username</label>
    <Field name="name" type="text" placeholder="Enter your username" className='border-black w-full border rounded-2xl px-2 py-1'/>
    <ErrorMessage name='name'  component="div" className="text-red-600 text-sm"/>

    <label htmlFor='email'>Email</label>
    <Field name="email" type="email" placeholder="Enter your Email" className='border-black w-full border rounded-2xl px-2 py-1'/>
    <ErrorMessage name='email'  component="div" className="text-red-600 text-sm"/>

    <label htmlFor='password'>Password</label>
    <Field name="password" type="text" placeholder="Enter the password" className='border-black w-full border rounded-2xl px-2 py-1'/>
    <ErrorMessage name='password' component="div" className="text-red-600 text-sm"/>
    <ToastContainer/>
    <button type='submit' className="bg-blue-500 text-white py-2 rounded-4xl mx-auto  h-12 w-20 hover:bg-red-600"
    >Submit</button>
</Form>
    </Formik>
  )
}

export default Register
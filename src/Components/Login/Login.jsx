import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import {  Link, useNavigate } from 'react-router-dom';

import Home from '../Home/Home';
import Register from '../Register/Register';
import { authContext } from '../../Context/authentication';



export default function Login() {

  const { setToken,setUserInfo } = useContext(authContext);
  
  
 const [errMessage,setErrMessage]= useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  const navFun = useNavigate();

function signIn() {
  
  navFun('/Register');
}



  let user = {
    email: '',
    password: '',
    

}


  async function loginUser(values) {
  setLoading(true)

    try {
      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values);
      
      if (data.message === "success") {
        localStorage.setItem('tkn', data.token);
        setToken(data.token);
        setUserInfo(data.user);
       


      setSuccessMsg('Welcome back ');
         setTimeout(function () {
         navigate("/Home")
        
       },1500)
      }



    } catch (error) {
      setErrMessage(error.response.data.message);
    }
    setLoading(false)
  }

  const userObject=useFormik({
    initialValues: user,
    onSubmit: loginUser,


    validate: function (values) {
      
      setErrMessage(null);
      const errors = {};
      
      if (values.email.includes('@') === false || values.email.includes('.') === false) { 
        errors.email='Email must be valid'
      };
       
     if (values.password.length < 6 || values.password.length > 12) {
       errors.password = 'Password must be from 6 characters to 12 characters '

      };
     
     
      return errors;
    }
})
 
    

  return <>
    <div className="container">
       {errMessage? <div className="alert ale-error p-2 w-25 mx-auto text-center">{errMessage}</div>:''}
             {successMsg? <div className="alert ale-success p-2 w-25 mx-auto  text-center ">{successMsg}</div>:''}
    
      <div className="row bg-white p-3 rounded rounded-3" >
        
         <div className="col-md-5  ">
          <div className=" rounded rounded-2  main-bg-color  m-3 "  >
            <img src={require('../../images/login.png')} alt="login" className="w-100" />

          </div>

        </div>
        <div className="col-md-7 mx-auto g-3 mt-5 p-3">
          <form onSubmit={userObject.handleSubmit} >
           
            <h3 className='text-center mb-3'>Sign In</h3>
            <div className="form-group ">
              <div className="m-2 ps-3">
                <div className="pb-3">
                  
              <label htmlFor="email"><span className='text-danger'>*</span>Email  :</label>
              <input  onBlur={userObject.handleBlur} onChange={userObject.handleChange}  value={userObject.values.email} type="email" className="form-control mb-2" id="email" />
               {userObject.errors.email&& userObject.touched.email?<div className="alert alert ale-error p-1 my-0 ">{userObject.errors.email }</div>:''}

                </div>
                <div className="pb-3">
                  <label htmlFor="password"><span className='text-danger'>*</span>Password :</label>
              <input  onBlur={userObject.handleBlur} onChange={userObject.handleChange}  value={userObject.values.password} type="password" className="form-control mb-2" id="password" />
               {userObject.errors.password&& userObject.touched.password?<div className="alert alert ale-error p-1 my-0 ">{userObject.errors.password }</div>:''}

                </div>
              
                <button type='submit' disabled={userObject.isValid === false || userObject.dirty === false} className='btn btn-outline-dark main-bg-color mt-2 w-100'>
                 
                   {loading?<ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#0d6efd','#fff','#0d6efd','#fff','#0d6efd','#fff']}
  />: "Sign In"}

                </button>
               



               
              </div>
              
            </div>






          </form>
          
        <div className=" ">
            <div className="m-2 ps-3">
             
                <button onClick={signIn} className='btn btn-outline-dark main-bg-color mt-3 w-100' >
               Create new account !</button>
            
              </div>
            </div>

        </div>
       
      </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  
    
   
  
}

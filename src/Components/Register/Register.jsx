import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';




export default function Register() {
   const [errMessage,setErrMessage]= useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  const navFun = useNavigate();
function logIn() {
 
  navFun('/Login')
}

  let user = {
    name: '',
    email: '',
    phone:'',
    password: '',
    rePassword: '',

}

  async function registerNewUser(values) {
  setLoading(true)

    try {
      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
      
      if (data.message === "success") {
        setSuccessMsg('Account has created Successfully');
         setTimeout(function () {
         navigate("/login")
        
       },1500)
      }

     


    } catch (error) {
      setErrMessage(error.response.data.message);
    }
    setLoading(false)
  }

  const userObject=useFormik({
    initialValues: user,
    onSubmit: registerNewUser,


    validate: function (values) {
      
      setErrMessage(null);
      const errors = {};
      if (values.name.length < 2 || values.name.length > 10) {
        errors.name='Name must be from 2 characters to 10 characters'
      };
      if (values.email.includes('@') === false || values.email.includes('.') === false) { 
        errors.email='Email must be valid'
      };
        if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
       errors.phone='Phone invalid'
      };
     if (values.password.length < 6 || values.password.length > 12) {
       errors.password = 'Password must be from 6 characters to 12 characters '

      };
     if (values.rePassword!==values.password) {
       errors.rePassword = 'Password and Re Password does`t match '

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
          <div className=" rounded rounded-2 main-bg-color  m-3 "  >
            <img src={require('../../images/signup.png')} alt="signup" className="img-fluid" />

          </div>

        </div>
        <div className="col-md-7 mx-auto g-3">
                    <form onSubmit={userObject.handleSubmit} >
                      
                        

                        <h3 className='text-center'>Create new account !</h3>
                        <div className="form-group ">
                          <div className="m-2 ps-3">
                          <label htmlFor="name" ><span className='text-danger'>*</span> Name :</label>
                          <input   onBlur={userObject.handleBlur} onChange={userObject.handleChange}  value={userObject.values.name} type="text" className="form-control mb-2" id="name"/>
                          {userObject.errors.name&& userObject.touched.name?<div className="alert ale-error p-1 my-0 ">{userObject.errors.name }</div>:''}

                          <label htmlFor="email"><span className='text-danger'>*</span>Email  :</label>
                          <input  onBlur={userObject.handleBlur} onChange={userObject.handleChange}  value={userObject.values.email} type="email" className="form-control mb-2" id="email" />
                          {userObject.errors.email&& userObject.touched.email?<div className="alert ale-error p-1 my-0">{userObject.errors.email }</div>:''}

                          <label htmlFor="phone"><span className='text-danger'>*</span>Phone  :</label>
                          <input  onBlur={userObject.handleBlur} onChange={userObject.handleChange}  value={userObject.values.phone} type="tel" className="form-control mb-2" id="phone" />
                          {userObject.errors.phone&& userObject.touched.phone?<div className="alert ale-error p-1 my-0">{userObject.errors.phone }</div>:''}

                          <label htmlFor="password"><span className='text-danger'>*</span>Password :</label>
                          <input  onBlur={userObject.handleBlur} onChange={userObject.handleChange}  value={userObject.values.password} type="password" className="form-control mb-2" id="password" />
                          {userObject.errors.password&& userObject.touched.password?<div className="alert ale-error p-1 my-0">{userObject.errors.password }</div>:''}

                          <label htmlFor="rePassword"><span className='text-danger'>*</span>Re Password :</label>
                          <input  onBlur={userObject.handleBlur} onChange={userObject.handleChange}  value={userObject.values.rePassword} type="password" className="form-control mb-2" id="rePassword" />
                          {userObject.errors.rePassword && userObject.touched.rePassword ? <div className="alert ale-error p-1 my-0">{userObject.errors.rePassword}</div> : ''}
                        
                            <button type='submit' disabled={userObject.isValid === false || userObject.dirty === false} className='btn btn-outline-dark main-bg-color mt-2 w-100'>
                            
                              {loading?<ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#0d6efd','#fff','#0d6efd','#fff','#0d6efd','#fff']}
              />: "Create"}

                            </button>
                          



                          
                          </div>
                        
                        </div>

                      </form>


            <div className=" ">
            <div className="m-2 ps-3">
              
                <button onClick={logIn} className='btn btn-outline-dark main-bg-color mt-3 w-100' >
                Sign In?</button>
            
              </div>
            </div>

        
        </div>
       
      </div>
  </div>
  
  
  
  
  
  
  
  </>
}

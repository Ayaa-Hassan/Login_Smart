import React, { useContext } from 'react'
import { authContext } from '../../Context/authentication';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

export default function Home() {
  const { user, token,setToken } = useContext(authContext);
  
console.log(user);
 
  const navFun = useNavigate();
function logout() {
  localStorage.removeItem('tkn');
  setToken(null);
  navFun('/Login')
}
  
  return <>
    
    <div className="container">
      <div className="row ">
        <div className="col-md-6 d-flex justify-content-center align-content-center mx-auto ">
          <div className=" bg-white my-3 rounded rounded-3">
            <div className="m-auto my-3   rounded rounded-circle w-50 main-bg-color " >
              <img src={require('../../images/home.png')} alt="hi" className='w-100' />
            </div>
            <div className="contact text-center my-5">
              {user? <h3 className="text-center">Welcome {user.name}</h3>:''}
              {user? <p className="text-center">Email : {user.email}</p>:''}
              {user? <p className="text-center">Role : {user.role}</p>:''}

              
              
               <button onClick={ logout}  className='btn btn-outline-dark main-bg-color mt-2 w-50'> Logout</button>
              </div>
          </div>
        </div>
      </div>
</div>



    </>
  
}

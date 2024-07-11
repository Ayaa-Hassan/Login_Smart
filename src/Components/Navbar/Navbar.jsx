import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Register from '../Register/Register';
import Login from '../Login/Login';
import { authContext } from '../../Context/authentication';

export default function Navbar() {

  const { token ,setToken} = useContext(authContext);

  const navFun = useNavigate();
function logout() {
  localStorage.removeItem('tkn');
  setToken(null);
  navFun('/Login')
}


  return <>
  
  
  
  
   <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container">
        <Link className="navbar-brand m-0" to="/Register ">
          <img src={require('../../images/logo.jpg')} alt=" palestine flag ipg logo" width={70}/>
        
        
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {token !==null? <> <li className="nav-item">
          <span onClick={logout}  className="nav-link " style={{cursor:'pointer'}}>Logout</span>
        </li> </>:<>
            <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Login">Login</Link>
            </li>
              <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Register">Register</Link>
            </li>
            
</>}

            
            </ul>
          




    </div>
  </div>
</nav>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
}

 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'; 
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import { AuthProvider } from './Context/authentication';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


const myRouter= createBrowserRouter([
  {
    path: '/', element: <Layout /> , children: [
      {index:true , element:<Register/>},
      {path:'register',element:<Register/>},
      {path:'login',element:<Login/>},
      {
        path: 'home', element: <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      },
      {path:'*',element:<NotFound/>},
    
  ]}
])




function App() {
  return <>
  
  <AuthProvider> 
  <RouterProvider router={myRouter}/>
  
  
  </AuthProvider>
  
  
  
  
  
  
  
  </>
}

export default App;

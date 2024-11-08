import React, { useEffect } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shops from './pages/Shops';

import Login from './pages/Login';
import Register from './pages/Register';
import { get_category } from './store/reducers/homeReducer';
import { useDispatch} from 'react-redux';

import Dashboard from './pages/Dashboard';
import ProtectUser from './utils/ProtectUser';
import Index from './components/dashboard/Index';
import Orders from './components/dashboard/Orders';
import ChangePassword from './components/dashboard/ChangePassword';
import Wishlist from './components/dashboard/Wishlist';
import UserInfor from './components/dashboard/UserInfor';
import OrderDetails from './components/dashboard/OrderDetails';




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_category()) 
},[])


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/shops' element={<Shops/>} />


      <Route path='/dashboard' element={<ProtectUser/>} >
      <Route path='' element={<Dashboard/>} >        
      <Route path='' element={<Index/>} />
      <Route path='my-orders' element={<Orders/>} /> 
      <Route path='change-password' element={<ChangePassword/>} /> 
      <Route path='my-wishlist' element={<Wishlist/>} /> 
      <Route path='order/details/:orderId' element={<OrderDetails/>} /> 
      <Route path='userinfor' element={<UserInfor/>} /> 


       
       </Route> 
      </Route>
      
       



    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
;

import React, { useEffect } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shops from './pages/Shops';

import Login from './pages/Login';
import Register from './pages/Register';
import { get_category } from './store/reducers/homeReducer';
import Chatbot from './components/Chatbot';


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
      <Route path='/products?' element={<CategoryShop/>} />
      <Route path='/products/search?' element={<SearchProducts/>} />
      <Route path='/card' element={<Card/>} />
      <Route path='/product/details/:slug' element={<Details/>} /> 
      <Route path='/shipping' element={<Shipping/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/order/confirm?' element={<ConfirmOrder/>} /> 


      <Route path='/dashboard' element={<ProtectUser/>} >
      <Route path='' element={<Dashboard/>} >        
      <Route path='' element={<Index/>} />
      <Route path='my-orders' element={<Orders/>} /> 
      <Route path='change-password' element={<ChangePassword/>} /> 
      <Route path='history' element={<History/>} /> 
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

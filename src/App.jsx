import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import Details from './pages/Details';
import Login from './pages/Login';
import Register from './pages/Register';
import CategoryShop from './pages/CategoryShop';
import SearchProducts from './pages/SearchProducts';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import ProtectUser from './utils/ProtectUser';
import Index from './components/dashboard/Index';
import Orders from './components/dashboard/Orders';
import ChangePassword from './components/dashboard/ChangePassword';
import Wishlist from './components/dashboard/Wishlist';
import OrderDetails from './components/dashboard/OrderDetails';
import Chat from './components/dashboard/Chat';
import ConfirmOrder from './pages/ConfirmOrder';
import OrderHistory from './pages/OrderHistory';
import OrderHistoryDetails from './pages/OrderHistoryDetails';
import Categorys from './components/Categorys'; // Import component này để thử nghiệm
import LoadCategories from './components/LoadCategories'; // Nếu có

function App() {
  // State quản lý danh sách yêu thích (Wishlist)
  const [wishlist, setWishlist] = useState([]);

  // Hàm để thêm sản phẩm vào Wishlist
  const handleAddToWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (!exists) {
      setWishlist([...wishlist, product]);
      console.log('Thêm vào Wishlist:', product.name);
    } else {
      console.log('Sản phẩm đã có trong Wishlist');
    }
  };

  // Hàm để xóa sản phẩm khỏi Wishlist
  const handleRemoveFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
    console.log('Đã xóa sản phẩm khỏi Wishlist');
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* Component LoadCategories nếu có */}
        {/* <LoadCategories /> */}
        <Routes>
          {/* Các route chính */}
          <Route path="/" element={<Home onAddToWishlist={handleAddToWishlist} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shops" element={<Shops onAddToWishlist={handleAddToWishlist} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/products" element={<CategoryShop onAddToWishlist={handleAddToWishlist} />} />
          <Route path="/products/search" element={<SearchProducts />} />
          <Route path="/product/details/:id" element={<Details />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/history/:orderId" element={<OrderHistoryDetails />} />
          <Route path="/my-wishlist" element={<Wishlist />} 
          />

          {/* Đường dẫn cho Dashboard */}
          <Route path="/dashboard" element={<ProtectUser />}>
            <Route path="" element={<Dashboard />}>
              <Route path="" element={<Index />} />
              <Route path="my-orders" element={<Orders />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="order/details/:orderId" element={<OrderDetails />} />
              <Route path="chat" element={<Chat />} />
              <Route path="chat/:sellerId" element={<Chat />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

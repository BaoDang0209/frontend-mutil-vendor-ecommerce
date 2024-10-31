import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaTag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../store/reducers/CartContext'; // Import CartContext

const Cart = () => {
  const { cart, getSubtotal, getTotal, discountRate, deliveryFee } = useContext(CartContext); // Lấy từ context
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const subtotal = getSubtotal();
  const discount = subtotal * discountRate;
  const total = getTotal();

  // Hàm xử lý nhập mã khuyến mãi
  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  // Hàm xử lý áp dụng mã khuyến mãi
  const applyPromoCode = () => {
    if (isPromoApplied) {
      alert('Promo code has already been used');
      return;
    }

    if (promoCode.toLowerCase() === 'discount10') {
      setIsPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  return (
    <div>
      <Header />

      <div className="bg-white flex flex-col items-center w-full mt-4">
        <div className="bg-white overflow-hidden w-[1440px]">
          {/* Đường dẫn Home > Cart */}
          <div className="flex items-center gap-3 mt-4 ml-[100px]">
            <div className="inline-flex items-center gap-1">
              <div className="w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base">
                Home
              </div>
              <IoIosArrowForward className="w-4 h-4" alt="Frame" />
            </div>
            <div className="w-fit [font-family:'Open_Sans',Helvetica] font-normal text-black text-base">
              Cart
            </div>
          </div>

          {/* Tiêu đề Your Cart */}
          <div className="mt-4 ml-[100px] [font-family:'Roboto',Helvetica] font-bold text-black text-[40px]">
            Your cart
          </div>

          {/* Danh sách sản phẩm trong giỏ hàng */}
          <div className="flex flex-col w-[715px] items-start gap-6 px-6 py-5 mt-6 ml-[100px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((product, index) => (
                <div key={index} className="flex items-center justify-between w-full p-4 border-b">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-md border"
                    />
                    <div>
                      <div className="font-semibold">{product.name}</div>
                      <div className="text-gray-600">Quantity: {product.quantity}</div>
                    </div>
                  </div>
                  <div className="font-bold">
                    {(product.price * product.quantity).toLocaleString()} VND
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bảng tóm tắt đơn hàng */}
          <div className="flex flex-col w-[505px] h-auto items-start gap-6 px-6 py-5 mt-6 ml-[835px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
            <div className="w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl">
              Order Summary
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between w-full">
              <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl">
                Subtotal
              </div>
              <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-xl">
                {subtotal.toLocaleString()} VND
              </div>
            </div>

            {/* Discount */}
            <div className="flex items-center justify-between w-full">
              <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl">
                Discount (10%)
              </div>
              <div className="[font-family:'Open_Sans',Helvetica] font-bold text-[#ff3333] text-xl">
                -{discount.toLocaleString()} VND
              </div>
            </div>

            {/* Delivery Fee */}
            <div className="flex items-center justify-between w-full">
              <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl">
                Delivery Fee
              </div>
              <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-xl">
                {deliveryFee.toLocaleString()} VND
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between w-full">
              <div className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xl">
                Total
              </div>
              <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl">
                {total.toLocaleString()} VND
              </div>
            </div>
          </div>

          {/* Nút Go to Checkout */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate('/order')}
              className="w-[505px] bg-black text-white font-bold italic py-4 rounded-[62px] ml-[738px] whitespace-nowrap"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;

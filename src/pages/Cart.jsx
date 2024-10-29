import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Buy from "../components/Buy";
import { FaTag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const initialPrice = 2999000; // Giá của một sản phẩm
    const [subtotal, setSubtotal] = useState(initialPrice); // Subtotal ban đầu
    const discount = 0.1; // Giảm giá 10%
    const deliveryFee = 0; // Phí giao hàng
    const [promoCode, setPromoCode] = useState(''); // Mã khuyến mãi
    const [isPromoApplied, setIsPromoApplied] = useState(false); // Trạng thái mã đã áp dụng

    // Hàm cập nhật subtotal
    const updateSubtotal = (newSubtotal) => {
        setSubtotal(newSubtotal);
    };

    // Hàm xóa sản phẩm
    const removeProduct = (productTotal) => {
        setSubtotal(subtotal - productTotal);
    };

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
            setSubtotal(subtotal * 0.9); // Giảm thêm 10% nếu mã khuyến mãi hợp lệ
            setIsPromoApplied(true); // Đánh dấu là mã đã được áp dụng
        } else {
            alert('Invalid promo code');
        }
    };

    // Tính tổng với giảm giá và phí vận chuyển
    const total = subtotal * (1 - discount) + deliveryFee;

    // Hàm điều hướng đến trang xác nhận
    const handleCheckout = () => {
        navigate('/order', {
            state: {
                subtotal: subtotal,
                discount: discount,
                deliveryFee: deliveryFee,
                total: total,
            }
        });
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
                        <Buy onUpdate={updateSubtotal} onRemove={removeProduct} />
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
                                -{(subtotal * discount).toLocaleString()} VND
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

                        {/* Promo Code Section */}
                        <div className="flex items-center w-full gap-3 mt-4">
                            <div className="flex items-center flex-1 gap-3 px-4 py-3 bg-[#efefef] rounded-[62px]">
                                <FaTag className="w-6 h-6" alt="Frame" />
                                <input
                                    type="text"
                                    value={promoCode}
                                    onChange={handlePromoCodeChange}
                                    className="[font-family:'Open_Sans',Helvetica] font-normal text-[#00000066] text-base flex-1 bg-transparent outline-none"
                                    placeholder="Enter promo code"
                                />
                            </div>
                            <button
                                onClick={applyPromoCode}
                                className="bg-black text-white font-bold py-2 px-4 rounded-[62px] whitespace-nowrap"
                            >
                                Apply
                            </button>
                        </div>

                        {/* Line */}
                        <img className="w-full h-px object-cover mt-4" alt="Line" src="/img/details/line-4.svg" />

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
                            onClick={handleCheckout}
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

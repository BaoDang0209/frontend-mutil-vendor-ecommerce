import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const ConfirmOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { subtotal, discount, deliveryFee, total } = location.state || {}; // Nhận dữ liệu từ Cart

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
                            Payment
                        </div>
                    </div>
                    <div className="bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-md">
                        {/* Tiêu đề */}
                        <h2 className="text-2xl font-bold mb-6">Payment and delivery</h2>

                        {/* Form nhập liệu */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            {/* Tên người nhận */}
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Recipient name</label>
                                <input
                                    type="text"
                                    placeholder="Enter recipient name"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Địa chỉ email */}
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Enter email address *</label>
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Số điện thoại */}
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Enter phone number *</label>
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Tỉnh/Thành phố */}
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Select Province/City</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select Province/City</option>
                                    <option>Hà Nội</option>
                                    <option>TP Hồ Chí Minh</option>
                                    {/* Thêm các tùy chọn khác nếu cần */}
                                </select>
                            </div>

                            {/* Quận/Huyện */}
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Select District</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select District</option>
                                    <option>Quận 1</option>
                                    <option>Quận 2</option>
                                    {/* Thêm các tùy chọn khác nếu cần */}
                                </select>
                            </div>

                            {/* Xã/Phường/Thị trấn */}
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Select Commune/Ward/Town</label>
                                <select className="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Select Commune/Ward/Town</option>
                                    <option>Phường 1</option>
                                    <option>Phường 2</option>
                                    {/* Thêm các tùy chọn khác nếu cần */}
                                </select>
                            </div>

                            {/* Địa chỉ chi tiết */}
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Enter specific address</label>
                                <input
                                    type="text"
                                    placeholder="Enter the specific address. House number, street name,..."
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                         {/* Hiển thị chi tiết sản phẩm và tổng giá tiền */}
                         <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>{subtotal?.toLocaleString()} VND</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount (10%):</span>
                                <span>-{(subtotal * discount)?.toLocaleString()} VND</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Fee:</span>
                                <span>{deliveryFee?.toLocaleString()} VND</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>{total?.toLocaleString()} VND</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={() => navigate('/cart')}
                                className="text-red-500 font-bold hover:underline"
                            >
                                Back to cart
                            </button>

                            <button className="bg-red-500 text-white px-6 py-3 rounded-md font-bold">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ConfirmOrder;
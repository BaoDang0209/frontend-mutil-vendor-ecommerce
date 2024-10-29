import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { orderData } from '../data/orderData.js';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="bg-gray-100 flex flex-col items-center w-full py-8">
                <div className="bg-white w-[90%] max-w-5xl p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Order History</h2>

                    {orderData.map(order => (
                        <div key={order.orderId} className="bg-white p-4 mb-4 border rounded-lg shadow-sm">
                            {/* Header thông tin đơn hàng */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-lg font-semibold">
                                    Order ID: {order.orderId}
                                </div>
                                <div className={`text-sm font-bold ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Cancelled' ? 'text-red-600' : 'text-yellow-500'}`}>
                                    {order.status}
                                </div>
                            </div>

                            {/* Danh sách sản phẩm trong đơn hàng */}
                            {order.products.map(product => (
                                <div key={product.id} className="flex items-center mb-3">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-20 h-20 rounded-md border"
                                    />
                                    <div className="ml-4 flex-1">
                                        <div className="text-lg font-medium">{product.name}</div>
                                        <div className="text-sm text-gray-500">Price: {product.price.toLocaleString()} VND</div>
                                        <div className="text-sm text-gray-500">Quantity: {product.quantity}</div>
                                    </div>
                                </div>
                            ))}

                            {/* Thông tin tổng tiền */}
                            <div className="flex justify-between items-center mt-4">
                                <div className="text-sm text-gray-500">
                                    Order Date: {order.orderDate}
                                </div>
                                <div className="text-lg font-semibold">
                                    Total: {order.total.toLocaleString()} VND
                                </div>
                            </div>

                            {/* Nút xem chi tiết đơn hàng */}
                            <div className="flex justify-end mt-4">
                                <button 
                                    onClick={() => navigate(`/history/${order.orderId}`)}
                                    className="bg-orange-500 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-600"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderHistory;

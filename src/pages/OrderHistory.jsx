import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Dữ liệu mẫu cho lịch sử đơn hàng
const orderData = [
  {
    id: 1,
    image: '/img/simple_top.jpg',
    name: 'Simple Top',
    description: 'Comfortable V-neck top',
    orderNumber: '#202152',
    total: 452.23,
    status: 'Returned',
    date: '2024-10-01',
  },
  {
    id: 2,
    image: '/img/simple_scarf.jpg',
    name: 'Simple Printed Scarf',
    description: 'Cotton Cool Scarf',
    orderNumber: '#202153',
    total: 452.23,
    status: 'Delivered',
    date: '2024-10-02',
  },
  {
    id: 3,
    image: '/img/nike_shoes.jpg',
    name: 'Nike Shoes',
    description: 'Fashion Shoes',
    orderNumber: '#202154',
    total: 452.23,
    status: 'Delivered',
    date: '2024-10-03',
  },
];

const OrderHistory = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(''); // State lưu ngày đã chọn
  const [selectedStatus, setSelectedStatus] = useState(''); // State lưu trạng thái đã chọn

  // Hàm lọc đơn hàng theo ngày và trạng thái
  const filteredOrders = orderData.filter(order => {
    const dateMatch = selectedDate ? order.date === selectedDate : true;
    const statusMatch = selectedStatus ? order.status === selectedStatus : true;
    return dateMatch && statusMatch;
  });

  const handleViewDetails = (orderId) => {
    navigate(`/history/${orderId}`);
  };

  return (
    <div>
      <Header />
      <div className="p-8 bg-white-100 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
          {/* Tiêu đề trang */}
          <h2 className="text-2xl font-bold mb-6">Order History</h2>

          {/* Hàng ngang cho các bộ lọc */}
          <div className="flex justify-between mb-4">
            {/* Input chọn ngày */}
            <div className="flex items-center">
              <label className="block mr-2 text-gray-600">Filter by Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)} // Cập nhật state khi chọn ngày
                className="p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Dropdown chọn trạng thái */}
            <div className="flex items-center">
              <label className="block mr-2 text-gray-600">Filter by Status:</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)} // Cập nhật state khi chọn trạng thái
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">All</option>
                <option value="Delivered">Delivered</option>
                <option value="Returned">Returned</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Bảng lịch sử đơn hàng */}
          <div className="overflow-hidden rounded-lg">
            <table className="w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3">Order Number</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    {/* Cột sản phẩm */}
                    <td className="p-3 flex items-center">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="w-16 h-16 rounded-md border mr-4"
                      />
                      <div>
                        <div className="font-semibold">{order.name}</div>
                        <div className="text-sm text-gray-500">{order.description}</div>
                      </div>
                    </td>

                    {/* Số đơn hàng */}
                    <td className="p-3">{order.orderNumber}</td>

                    {/* Tổng tiền */}
                    <td className="p-3">${order.total.toFixed(2)}</td>

                    {/* Trạng thái */}
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-white text-sm ${
                          order.status === 'Delivered'
                            ? 'bg-green-500'
                            : order.status === 'Returned'
                            ? 'bg-purple-500'
                            : 'bg-yellow-500'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    {/* Hành động */}
                    <td className="p-3">
                      <button 
                        onClick={() => handleViewDetails(order.orderNumber.replace('#', ''))}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <IoIosArrowForward className="h-6 w-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;

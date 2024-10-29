import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderHistoryDetails = () => {
  // Dữ liệu mẫu cho chi tiết đơn hàng
  const order = {
    orderId: '1017390233990',
    items: [
      { id: 1, name: "7' Apple Pie", price: 25.99, quantity: 1, image: '/img/apple_pie.jpg' },
      { id: 2, name: "7' Banana Foster Pie", price: 25.99, quantity: 1, image: '/img/banana_foster.jpg' },
      { id: 3, name: "Banana Pudding (per lb)", price: 15.99, quantity: 1, image: '/img/banana_pudding.jpg' },
    ],
    subtotal: 65.00,
    shipping: 5.00,
    tax: 0.00,
    total: 70.00,
    billingInfo: {
      cardType: 'Visa',
      lastDigits: '2536',
    },
    shippingInfo: {
      name: 'Candice Doe',
      address: '123 West Maple Street, Manhattan, New York 87654',
    },
    delivery: {
      method: 'UPS Ground',
      orderId: '1017390233990',
    }
  };

  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        {/* Thông tin đơn hàng */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Order Details</h2>
          <div className="text-gray-600">Order #{order.orderId}</div>
        </div>

        {/* Bảng sản phẩm */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Items from Pete's Bakery</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Item(s)</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Qty.</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-md border mr-4"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-3">{item.price.toLocaleString()} USD</td>
                    <td className="p-3">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="flex justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <div className="border rounded-lg p-4 mt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>{order.subtotal.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>{order.shipping.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Estimated Tax:</span>
                <span>{order.tax.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>{order.total.toLocaleString()} USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thông tin bổ sung */}
        <div className="grid grid-cols-3 gap-6">
          {/* Thông tin thanh toán */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Billing Information</h3>
            <div className="text-gray-600">Credit Card</div>
            <div className="text-gray-800 font-bold">
              {order.billingInfo.cardType} ending in {order.billingInfo.lastDigits}
            </div>
          </div>

          {/* Thông tin vận chuyển */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Shipping Information</h3>
            <div className="text-gray-800">{order.shippingInfo.name}</div>
            <div className="text-gray-600">{order.shippingInfo.address}</div>
          </div>

          {/* Thông tin giao hàng */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Delivery</h3>
            <div className="text-gray-600">{order.delivery.method}</div>
            <div className="mt-4">
              <button
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600"
                onClick={() => alert('Tracking package...')}
              >
                Track Package
              </button>
            </div>
          </div>
        </div>

        {/* Nút quay lại */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate('/order-history')}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-600"
          >
            Back to Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryDetails;

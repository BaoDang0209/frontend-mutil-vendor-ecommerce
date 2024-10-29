import React from 'react';

const PaymentInfo = () => {
    return (
        <div>
            <div className="bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-md">
                {/* Tiêu đề */}
                <h2 className="text-2xl font-bold mb-6">Thanh toán và giao hàng</h2>

                {/* Form nhập liệu */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    {/* Tên người nhận */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tên người nhận *</label>
                        <input
                            type="text"
                            placeholder="Nhập tên người nhận"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Địa chỉ email */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nhập địa chỉ email *</label>
                        <input
                            type="email"
                            placeholder="Nhập địa chỉ email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Số điện thoại */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nhập số điện thoại *</label>
                        <input
                            type="tel"
                            placeholder="Nhập số điện thoại"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Tỉnh/Thành phố */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Chọn Tỉnh/Thành phố</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option>Chọn Tỉnh/Thành phố</option>
                            <option>Hà Nội</option>
                            <option>TP Hồ Chí Minh</option>
                            {/* Thêm các tùy chọn khác nếu cần */}
                        </select>
                    </div>

                    {/* Quận/Huyện */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Chọn Quận/Huyện</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option>Chọn Quận/Huyện</option>
                            <option>Quận 1</option>
                            <option>Quận 2</option>
                            {/* Thêm các tùy chọn khác nếu cần */}
                        </select>
                    </div>

                    {/* Xã/Phường/Thị trấn */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Chọn Xã/Phường/Thị trấn</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option>Chọn Xã/Phường/Thị trấn</option>
                            <option>Phường 1</option>
                            <option>Phường 2</option>
                            {/* Thêm các tùy chọn khác nếu cần */}
                        </select>
                    </div>

                    {/* Địa chỉ chi tiết */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nhập địa chỉ cụ thể</label>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ cụ thể. Số nhà, tên đường,..."
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    {/* Quay lại giỏ hàng */}
                    <button className="text-red-500 font-bold hover:underline">Quay lại giỏ hàng</button>

                    {/* Vận chuyển */}
                    <button className="bg-red-500 text-white px-6 py-3 rounded-md font-bold">
                        Vận chuyển
                    </button>
                </div>
            </div>

        </div>
    );
};

export default PaymentInfo;
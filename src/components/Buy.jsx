import React, { useState } from 'react';
import { IoTrashBin } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Buy = ({ onUpdate }) => {
    const [quantity, setQuantity] = useState(1);
    const price = 2999000; // Giá sản phẩm

    // Hàm tăng số lượng sản phẩm
    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        if (onUpdate) onUpdate(newQuantity * price); // Kiểm tra nếu onUpdate tồn tại
    };

    // Hàm giảm số lượng sản phẩm
    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            if (onUpdate) onUpdate(newQuantity * price); // Kiểm tra nếu onUpdate tồn tại
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center gap-4 relative self-stretch w-full">
                {/* Hình ảnh sản phẩm */}
                <div className="relative w-[124px] h-[124px] bg-[#f0eeed] rounded-[8.66px] overflow-hidden">
                    <img
                        className="absolute w-[124px] h-[124px] top-0 left-0 object-cover"
                        alt="Image"
                        src="/img/cart/image-8.png"
                    />
                </div>

                {/* Thông tin sản phẩm */}
                <div className="flex items-center justify-between relative flex-1 grow">
                    <div className="inline-flex flex-col h-[118px] items-start justify-between relative">
                        <div className="inline-flex flex-col items-start gap-0.5">
                            <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl">
                                Sneaker
                            </div>
                            <div className="inline-flex flex-col items-start gap-1">
                                <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm">
                                    <span className="text-black">Size: </span>
                                    <span className="text-[#00000099]">39</span>
                                </p>
                                <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm">
                                    <span className="text-black">Color: </span>
                                    <span className="text-[#00000099]">Red</span>
                                </p>
                            </div>
                        </div>
                        <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl">
                            {price.toLocaleString()} VND
                        </div>
                    </div>

                    {/* Số lượng và thao tác */}
                    <div className="flex flex-col w-[225px] h-[124px] items-end justify-between">
                        <IoTrashBin className="relative w-6 h-6 cursor-pointer" alt="Delete" />
                        <div className="inline-flex items-center justify-center gap-5 px-5 py-3 bg-[#efefef] rounded-[62px] overflow-hidden">
                            <FaMinus 
                                className="relative w-5 h-5 cursor-pointer" 
                                alt="Decrease" 
                                onClick={handleDecrease} 
                            />
                            <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm">
                                {quantity}
                            </div>
                            <FaPlus 
                                className="relative w-5 h-5 cursor-pointer" 
                                alt="Increase" 
                                onClick={handleIncrease} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Đường kẻ ngang */}
            <img className="relative self-stretch w-full h-px object-cover mt-4" alt="Line" src="/img/details/line-4.svg" />
        </div>
    );
};

export default Buy;

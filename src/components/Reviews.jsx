import React from 'react';
import Rating from "../components/Rating";
import { FaCircleCheck } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const Reviews = () => {
    return (
        <div className="w-full max-w-[610px] p-8 border border-solid border-[#0000001a] rounded-[20px] overflow-hidden">
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-2">
                        <Rating />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="font-bold text-black text-xl">
                                Samantha D.
                            </div>
                            <FaCircleCheck className="w-6 h-6 text-green-500" />
                        </div>
                        <p className="text-[#00000099] text-base">
                            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                            As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                        </p>
                    </div>
                </div>
                <HiDotsHorizontal className="w-6 h-6 text-gray-400" />
            </div>
            <p className="mt-4 font-bold italic text-[#00000099] text-base">
                Posted on August 14, 2023
            </p>
        </div>
    );
};

export default Reviews;

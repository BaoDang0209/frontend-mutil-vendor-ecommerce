import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = () => {
    const [rating, setRating] = useState(0); // Giá trị đánh giá hiện tại
    const [hover, setHover] = useState(0);   // Giá trị khi di chuột qua

    const handleClick = (value) => {
        setRating(value); // Cập nhật giá trị đánh giá
    };

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1; // Tính giá trị sao từ 1 đến 5
                
                return (
                    <span
                        key={index}
                        className="cursor-pointer"
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => handleClick(starValue)}
                    >
                        {rating >= starValue || hover >= starValue ? (
                            <FaStar
                                className="w-[17.58px] h-[16.72px]"
                                style={{ color: 'gold' }}
                            />
                        ) : rating >= starValue - 0.5 || hover >= starValue - 0.5 ? (
                            <FaStarHalfAlt
                                className="w-[17.58px] h-[16.72px]"
                                style={{ color: 'gold' }}
                            />
                        ) : (
                            <FaRegStar
                                className="w-[17.58px] h-[16.72px]"
                                style={{ color: 'gray' }}
                            />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;

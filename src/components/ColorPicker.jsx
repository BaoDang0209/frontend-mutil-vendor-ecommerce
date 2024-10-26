import React, { useState } from 'react';

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState(null); // Trạng thái để theo dõi màu được chọn

    const colorsRow1 = ['#00c12a', '#f50505', '#f5dd05', '#f57805', '#05c9f5'];
    const colorsRow2 = ['#053af5', '#7d05f5', '#f505a3', '#ffffff', '#000000'];

    const handleColorClick = (color) => {
        setSelectedColor(color); // Cập nhật màu đã chọn
    };

    const renderColor = (color) => (
        <div
            className={`relative w-[37px] h-[37px] rounded-[18.5px] border border-solid border-[#00000033] ${color === selectedColor ? 'border-2 border-black' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)} // Gán sự kiện nhấn
        >
            {color === selectedColor && (
                <img
                    className="absolute w-4 h-4 top-2 left-2"
                    alt="Check"
                    src="./img/details/frame-7.svg" // Biểu tượng tích
                />
            )}
        </div>
    );

    return (
        <div>
            <div className="flex w-[247px] items-center justify-between relative flex-[0_0_auto] mb-2">
                {colorsRow1.map(renderColor)}
            </div>
            <div className="flex w-[247px] items-center justify-between relative flex-[0_0_auto]">
                {colorsRow2.map(renderColor)}
            </div>
        </div>
    );
};

export default ColorPicker;

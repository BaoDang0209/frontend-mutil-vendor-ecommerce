import React, { useState, useRef, useEffect } from 'react';

const PriceSlider = () => {
    const [leftValue, setLeftValue] = useState(0); // Giá trị bên trái
    const [rightValue, setRightValue] = useState(20000000); // Giá trị bên phải
    const [isDraggingLeft, setIsDraggingLeft] = useState(false);
    const [isDraggingRight, setIsDraggingRight] = useState(false);
    const sliderRef = useRef(null);

    const handleMouseDownLeft = () => {
        setIsDraggingLeft(true);
    };

    const handleMouseDownRight = () => {
        setIsDraggingRight(true);
    };

    const handleMouseMove = (e) => {
        const slider = sliderRef.current;
        if (slider && (isDraggingLeft || isDraggingRight)) {
            const rect = slider.getBoundingClientRect();
            const sliderWidth = rect.width;

            // Tính toán vị trí mới theo phần trăm
            const newPosition = ((e.clientX - rect.left) / sliderWidth) * 20000000;

            if (isDraggingLeft) {
                // Giới hạn giá trị bên trái từ 0 đến giá trị bên phải
                const newLeftValue = Math.min(Math.max(newPosition, 0), rightValue);
                setLeftValue(newLeftValue);
            } else if (isDraggingRight) {
                // Giới hạn giá trị bên phải từ giá trị bên trái đến 20,000,000
                const newRightValue = Math.max(Math.min(newPosition, 20000000), leftValue);
                setRightValue(newRightValue);
            }
        }
    };

    const handleMouseUp = () => {
        setIsDraggingLeft(false);
        setIsDraggingRight(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDraggingLeft, isDraggingRight]);

    return (
        <div className="relative w-[247px] h-10 mt-4" ref={sliderRef}>
            <div className="absolute top-0 left-0 [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm tracking-[0] leading-[normal]">
                ${Math.round(leftValue)}
            </div>
            <div className="absolute top-0 right-0 [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm tracking-[0] leading-[normal]">
                ${Math.round(rightValue)}
            </div>

            <div className="absolute w-full h-1.5 top-5 left-0 bg-[#efefef] rounded-[20px]">
                <div
                    className="absolute h-1.5 top-0 left-0 bg-black rounded-[20px]"
                    style={{ width: `${(rightValue - leftValue) / 20000000 * 100}%`, left: `${(leftValue / 20000000) * 100}%` }}
                />
            </div>
            {/* Nút kéo bên trái */}
            <div
                className="absolute w-5 h-5 top-4 bg-black rounded-full cursor-pointer"
                style={{ left: `${(leftValue / 20000000) * 100}%`, transform: 'translate(-50%, -50%)' }}
                onMouseDown={handleMouseDownLeft}
            />
            {/* Nút kéo bên phải */}
            <div
                className="absolute w-5 h-5 top-4 bg-black rounded-full cursor-pointer"
                style={{ left: `${(rightValue / 20000000) * 100}%`, transform: 'translate(-50%, -50%)' }}
                onMouseDown={handleMouseDownRight}
            />
        </div>
    );
};

export default PriceSlider;

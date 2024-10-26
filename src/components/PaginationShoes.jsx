import React, { useState } from 'react';

const PaginationShoes = () => {
    const [selectedPage, setSelectedPage] = useState(34); // Trạng thái để theo dõi số trang đã chọn
    const pageNumbers = Array.from({ length: 13 }, (_, index) => index + 30); // Tạo mảng số trang từ 30 đến 42

    return (
        <div>
            {pageNumbers.reduce((rows, number, index) => {
                // Chia thành các hàng với 4 số mỗi hàng
                if (index % 4 === 0) rows.push([]); // Tạo hàng mới nếu index chia hết cho 4
                rows[rows.length - 1].push(
                    <div
                        key={index}
                        className={`inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] rounded-[62px] overflow-hidden ${
                            number === selectedPage ? 'bg-black' : 'bg-[#efefef]'
                        }`}
                        onClick={() => setSelectedPage(number)} // Cập nhật trạng thái khi nhấn
                    >
                        <div
                            className={`relative w-fit mt-[-1.00px] ${
                                number === selectedPage ? 'text-[#ffffff] font-bold italic' : 'text-[#00000099] font-normal'
                            } text-sm tracking-[0] leading-[normal]`}
                        >
                            {number}
                        </div>
                    </div>
                );
                return rows;
            }, []).map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-3 mb-2"> {/* Thêm gap và margin-bottom giữa các hàng */}
                    {row}
                </div>
            ))}
        </div>
    );
};

export default PaginationShoes;

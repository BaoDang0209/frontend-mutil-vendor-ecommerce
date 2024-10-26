import {React,useState}     from 'react';
import { FaStar } from 'react-icons/fa';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Rating from '../components/Rating';
import { FaHeart } from 'react-icons/fa';
const Categorys = () => {
    // Tạo state để lưu trạng thái màu của biểu tượng
    const [isFavorite, setIsFavorite] = useState(false);

    // Hàm xử lý sự kiện khi nhấn vào biểu tượng
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <div className="relative w-[310px] h-[317px] left-[-7px]">
            {/* Khung sản phẩm */}
            <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />

            {/* Ảnh sản phẩm */}
            <img
                className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
                alt="Untitled design"
                src="/img/untitled-design-108.png"
            />

            {/* Biểu tượng yêu thích */}
            <FaHeart
            className="absolute w-[27px] h-[27px] top-6 left-[255px] cursor-pointer transition-colors"
            style={{
                color: isFavorite ? 'red' : 'gray',
            }}
            onClick={toggleFavorite}
        />

            {/* Tên sản phẩm */}
            <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
                Formal Slick shoe for man
            </p>

            {/* Giá sản phẩm */}
            <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
                4.999.000 VND
            </div>

            {/* Nút mua hàng */}
            <div className="" />
            <BsArrowUpRightCircleFill
                className="absolute w-[34px] h-[34px] top-[260px] left-[248px] rounded-[16.86px]"
                alt="Arrow"

            />

            {/* Xếp hạng sản phẩm */}
            <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
                <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className="relative w-[12.24px] h-[11.64px]"
                            style={{ color: 'gold' }}
                        />
                    ))}
                </div>
                <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                    <span className="text-black">5/</span>
                    <span className="text-[#00000099]">5</span>
                </p>
            </div>
        </div>
    );
};

export default Categorys;

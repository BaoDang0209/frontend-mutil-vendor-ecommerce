import { React, useState, useContext } from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaHeart } from 'react-icons/fa';
import Rating from '../components/Rating';
import { CartContext } from '../store/reducers/CartContext';
import { useNavigate } from 'react-router-dom';

const Categorys = ({ addToWishlist }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Khởi tạo hook để điều hướng

  const handleNavigateToDetails = () => {
    navigate(`/product/details/${product.id}`); // Điều hướng đến trang chi tiết sản phẩm
  };

  // Dữ liệu sản phẩm
  const product = {
    id: 1,
    image: '/img/untitled-design-108.png',
    name: 'Formal Slick shoe for man',
    description: 'Stylish shoe for formal wear',
    size: '42',
    color: 'Black',
    price: 4999000,
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      addToWishlist(product); // Thêm vào wishlist
    }
  };

  const handleAddToCart = () => {
    addToCart(product); // Thêm vào giỏ hàng
  };

  return (
    <div className="relative w-[310px] h-[317px] left-[-7px]">
      <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />

      <img
        className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
        alt="Untitled design"
        src={product.image}
      />

      <FaHeart
        className="absolute w-[27px] h-[27px] top-6 left-[255px] cursor-pointer transition-colors"
        style={{
          color: isFavorite ? 'red' : 'gray',
        }}
        onClick={toggleFavorite}
      />

      <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
        {product.name}
      </p>

      <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
        {product.price.toLocaleString()} VND
      </div>

      <BsArrowUpRightCircleFill
        className="absolute w-[34px] h-[34px] top-[260px] left-[248px] rounded-[16.86px] cursor-pointer"
        alt="Arrow"
        onClick={handleNavigateToDetails}
      />

      <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
        <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
          <Rating />
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

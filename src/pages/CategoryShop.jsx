import React, { useState, useContext } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaginationShoes from "../components/PaginationShoes";
import ColorPicker from "../components/ColorPicker";
import PriceSlider from "../components/PriceSlider";
import { IoIosArrowForward, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Categorys from '../components/Categorys'; // Kiểm tra lại đường dẫn và tên tệp\
import Wishlist from '../components/dashboard/Wishlist'
import { WishlistContext } from "../store/reducers/WishlistContext";


const CategoryShop = () => {
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isColorOpen, setColorOpen] = useState(true);
  const [isSizeOpen, setSizeOpen] = useState(true);

  const togglePrice = () => setPriceOpen(!isPriceOpen);
  const toggleColor = () => setColorOpen(!isColorOpen);
  const toggleSize = () => setSizeOpen(!isSizeOpen);

  const [wishlist, setWishlist] = useState([]);

  // const addToWishlist = (product) => {
  //   // Kiểm tra nếu sản phẩm đã có trong wishlist
  //   if (!wishlist.find(item => item.id === product.id)) {
  //     setWishlist([...wishlist, product]);
  //   }
  // };
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div>
      <Header />
      {/* Container chính */}
      <div className="container mx-auto py-4">
        {/* Đường dẫn Home > Category */}
        <div className="flex items-center gap-3 mt-4 ml-[100px]">
          <div className="inline-flex items-center gap-1">
            <div className="w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base">
              Home
            </div>
            <MdKeyboardArrowRight className="w-4 h-4" />
          </div>
          <div className="w-fit [font-family:'Open_Sans',Helvetica] font-normal text-black text-base">
            Category
          </div>
        </div>

        {/* Đường kẻ ngang */}
        <img
          className="w-[1240px] mt-2 ml-[100px] h-px object-cover"
          alt="Line"
          src="./img/details/line-10.svg"
        />

        {/* Container Flexbox để căn chỉnh các phần tử */}
        <div className="flex flex-row justify-between mt-6 mx-[100px]">
          {/* Phần Filters */}
          <div className="flex flex-col w-[420px] items-start gap-6 px-6 py-5 rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
            <div className="flex items-center justify-between w-full">
              <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-xl">
                Filters
              </div>
              <img className="w-6 h-6" alt="Frame" src="./img/details/frame-3.svg" />
            </div>

            {/* Nội dung bộ lọc */}
            <img className="w-full h-px object-cover" alt="Line" src="./img/details/line-10.svg" />

            {/* Price Filter */}
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center justify-between w-full cursor-pointer" onClick={togglePrice}>
                <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-xl">
                  Price
                </div>
                {isPriceOpen ? <IoIosArrowUp className="w-4 h-4" /> : <IoIosArrowDown className="w-4 h-4" />}
              </div>
              {isPriceOpen && <PriceSlider />}
            </div>

            <img className="w-full h-px object-cover" alt="Line" src="./img/details/line-10.svg" />

            {/* Color Filter */}
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center justify-between w-full cursor-pointer" onClick={toggleColor}>
                <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-xl">
                  Colors
                </div>
                {isColorOpen ? <IoIosArrowUp className="w-4 h-4" /> : <IoIosArrowDown className="w-4 h-4" />}
              </div>
              {isColorOpen && <ColorPicker />}
            </div>

            <img className="w-full h-px object-cover" alt="Line" src="./img/details/line-10.svg" />

            {/* Size Filter */}
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center justify-between w-full cursor-pointer" onClick={toggleSize}>
                <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-xl">
                  Size
                </div>
                {isSizeOpen ? <IoIosArrowUp className="w-4 h-4" /> : <IoIosArrowDown className="w-4 h-4" />}
              </div>
              {isSizeOpen && <PaginationShoes />}
            </div>
          </div>

          {/* Phần sản phẩm */}
          <div className="flex flex-col w-full ml-4">
            <div className="flex items-center justify-between mb-4">
              <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl">
                Casual
              </div>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#00000099]">
                Showing 1-10 of 100 Products
              </p>
            </div>

            {/* Grid sản phẩm */}
            <div className="grid grid-cols-3 gap-4">
              {Array(9).fill(null).map((_, index) => (
                <Categorys key={index} addToWishlist={addToWishlist} />
              ))} 
            </div>
            {/* Truyền danh sách yêu thích vào Wishlist */}
            {/* <Wishlist wishlist={wishlist} /> */}
            {/* Phân trang */}
            <div className="flex items-center justify-between mt-6">
              <button className="bg-white border border-gray-200 text-black px-4 py-2">
                Previous
              </button>
              <div className="flex gap-1">
                {/* Pagination logic */}
              </div>
              <button className="bg-white border border-gray-200 text-black px-4 py-2">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryShop;

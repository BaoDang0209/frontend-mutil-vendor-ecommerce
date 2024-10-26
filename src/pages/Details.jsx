import React, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Rating from "../components/Rating";
import Reviews from "../components/Reviews";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CgHeart } from "react-icons/cg";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(32);
  const reviews = Array(6).fill(null);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  const incrementSize = () => setSize(prev => prev + 1);
  const decrementSize = () => setSize(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="px-24 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-gray-600">Home</span>
              <IoIosArrowForward className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-600">Shop</span>
              <IoIosArrowForward className="w-4 h-4" />
            </div>
            <span className="text-gray-600">Men</span>
          </div>
        </nav>

        {/* Product Section */}
        <section className="px-24 py-8">
          <div className="flex gap-8">
            {/* Product Images */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((index) => (
                  <img
                    key={index}
                    className="w-[152px] h-[167px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    alt={`Product view ${index}`}
                    src="/img/details/image.png"
                  />
                ))}
              </div>
              
              {/* Main Image */}
              <div className="relative">
                <img
                  className="w-[444px] h-[530px] object-cover"
                  alt="Main product view"
                  src="/img/details/image.png"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl font-bold mb-4">Shoe</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <Rating />
                <span className="text-base">
                  <span className="text-black">4.5</span>
                  <span className="text-gray-600">/5</span>
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">600.000 VND</span>
                <span className="text-3xl font-bold text-gray-400 line-through">1.000.000 VND</span>
                <span className="px-3 py-1 bg-red-100 text-red-500 rounded-full font-bold">-40%</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers
                superior comfort and style.
              </p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="text-gray-600 mb-4">Select Colors</h3>
                <div className="flex gap-4">
                  <button className="w-9 h-9 rounded-full bg-[#4f4631]" />
                  <button className="w-9 h-9 rounded-full bg-[#314f49]" />
                  <button className="w-9 h-9 rounded-full bg-[#31344f]" />
                  <button className="w-9 h-9 rounded-full bg-[#f50505] border border-gray-200" />
                  <button className="w-9 h-9 rounded-full bg-[#f5dd05] border border-gray-200" />
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <h3 className="text-gray-600 mb-4">Choose Size</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-between w-40 px-5 py-4 bg-gray-100 rounded-full">
                    <button onClick={decrementSize}>
                      <FaMinus className="w-6 h-6" />
                    </button>
                    <span className="font-bold italic">{size}</span>
                    <button onClick={incrementSize}>
                      <FaPlus className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-between w-40 px-5 py-4 bg-gray-100 rounded-full">
                    <button onClick={decrementQuantity}>
                      <FaMinus className="w-6 h-6" />
                    </button>
                    <span className="font-bold italic">{quantity}</span>
                    <button onClick={incrementQuantity}>
                      <FaPlus className="w-6 h-6" />
                    </button>
                  </div>
                  <button className="flex-1 px-8 py-4 bg-black text-white font-bold italic rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="px-24 py-8 border-t border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl text-gray-600">Product Details</span>
            <span className="text-xl font-bold italic">Rating & Reviews</span>
            <span className="text-xl text-gray-600">FAQs</span>
          </div>

          {/* Reviews Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">All Reviews</h3>
                <span className="text-gray-600">(451)</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-5 py-3 bg-gray-100 rounded-full">
                  <span className="font-bold italic">Latest</span>
                  <RiArrowDownSLine className="w-4 h-4" />
                </div>
                <button className="px-5 py-3 bg-black text-white font-bold italic rounded-full">
                  Write a Review
                </button>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-2 gap-8">
              {reviews.map((_, index) => (
                <Reviews key={index} />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <button className="px-8 py-4 border border-gray-200 rounded-full font-bold italic">
                Load More Reviews
              </button>
            </div>
          </div>
        </section>

        {/* You Might Also Like */}
        <section className="px-24 py-12 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-8">You might also like</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-4">
                <div className="relative">
                  <img
                    className="w-full h-[354px] object-cover"
                    alt="Related product"
                    src="/img/details/untitled-design-108.png"
                  />
                  <button className="absolute top-4 right-4">
                    <CgHeart className="w-8 h-8" />
                  </button>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-2">Slick running shoes</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Rating />
                    <span className="text-sm">
                      <span className="text-black">4.5</span>
                      <span className="text-gray-600">/5</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">4.999.000 VND</span>
                    <BsArrowUpRightCircleFill className="w-8 h-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Details;
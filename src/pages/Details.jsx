import React, { useState, useContext } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Rating from "../components/Rating";
import Reviews from "../components/Reviews";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import ColorPicker from "../components/ColorPicker";
import { CartContext } from "../store/reducers/CartContext";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(32);
  const [selectedColor, setSelectedColor] = useState(null); // Trạng thái để lưu màu đã chọn
  const { addToCart } = useContext(CartContext); // Sử dụng context giỏ hàng

  // Mô phỏng dữ liệu sản phẩm
  const product = {
    id: 1,
    name: 'Shoe',
    price: 600000,
    image: '/img/details/image.png',
  };

  // Tăng giảm số lượng sản phẩm
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  // Tăng giảm kích thước sản phẩm
  const incrementSize = () => setSize(prev => prev + 1);
  const decrementSize = () => setSize(prev => prev > 1 ? prev - 1 : 1);

  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = () => {
    if (!selectedColor) {
      alert("Please select a color!");
      return;
    }

    const productToAdd = {
      ...product,
      size: size,
      color: selectedColor,
      quantity: quantity,
    };

    addToCart(productToAdd);
    alert("Product added to cart!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

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
                    src={product.image}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="relative">
                <img
                  className="w-[444px] h-[530px] object-cover"
                  alt="Main product view"
                  src={product.image}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

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
                <span className="text-3xl font-bold">{product.price.toLocaleString()} VND</span>
                <span className="text-3xl font-bold text-gray-400 line-through">1.000.000 VND</span>
                <span className="px-3 py-1 bg-red-100 text-red-500 rounded-full font-bold">-40%</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8">
                This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
              </p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="text-gray-600 mb-4">Select Colors</h3>
                <ColorPicker setSelectedColor={setSelectedColor} />
              </div>

              {/* Display selected color */}
              {selectedColor && (
                <div className="mb-4 text-gray-600">
                  Selected Color: <span className="font-bold" style={{ color: selectedColor }}>{selectedColor}</span>
                </div>
              )}

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
                  <button
                    className="flex-1 px-8 py-4 bg-black text-white font-bold italic rounded-full"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Details;

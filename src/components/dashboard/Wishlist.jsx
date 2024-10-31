// // import React, { useState } from 'react';
// // import { IoIosArrowForward } from "react-icons/io";
// // import { MdDelete } from "react-icons/md";
// // import { useNavigate } from 'react-router-dom';
// // import Footer from '../Footer';
// // import Header from '../Header';

// // // Dữ liệu mẫu cho danh sách yêu thích
// // const initialWishlistData = [
// //   {
// //     id: 1,
// //     image: '/img/simple_top.jpg',
// //     name: 'Simple Top',
// //     description: 'Comfortable V-neck top',
// //     size: '32',
// //     color: 'Red',
// //     price: 25.99,
// //   },
// //   {
// //     id: 2,
// //     image: '/img/simple_scarf.jpg',
// //     name: 'Simple Printed Scarf',
// //     description: 'Cotton Cool Scarf',
// //     size: 'Regular',
// //     color: 'Blue',
// //     price: 15.49,
// //   },
// //   {
// //     id: 3,
// //     image: '/img/nike_shoes.jpg',
// //     name: 'Nike Shoes',
// //     description: 'Fashion Shoes',
// //     size: '42',
// //     color: 'Black',
// //     price: 99.99,
// //   },
// // ];

// // const colors = ['Red', 'Blue', 'Green', 'Black', 'White']; // Màu sắc dưới dạng chữ
// // const sizes = ['32', '34', '36', '38', '40', '42']; // Kích thước dưới dạng chữ

// // const Wishlist = () => {
// //   const navigate = useNavigate();
// //   const [wishlistData, setWishlistData] = useState(initialWishlistData);

// //   const handleViewDetails = (itemId) => {
// //     navigate(`/product/${itemId}`); // Giả sử bạn có một route cho sản phẩm
// //   };

// //   const handleRemoveFromWishlist = (itemId) => {
// //     setWishlistData(wishlistData.filter(item => item.id !== itemId)); // Cập nhật danh sách yêu thích
// //   };

// //   const handleUpdateSize = (itemId, newSize) => {
// //     setWishlistData(wishlistData.map(item =>
// //       item.id === itemId ? { ...item, size: newSize } : item
// //     ));
// //   };

// //   const handleUpdateColor = (itemId, newColor) => {
// //     setWishlistData(wishlistData.map(item =>
// //       item.id === itemId ? { ...item, color: newColor } : item
// //     ));
// //   };

// //   return (
// //     <div>
// //       <Header />
// //       <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
// //         <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
// //           {/* Tiêu đề trang */}
// //           <h2 className="text-2xl font-bold mb-6">Wishlist</h2>

// //           {/* Tiêu đề các cột */}
// //           <div className="flex items-center justify-between font-semibold text-gray-700 mb-2">
// //             <div className="w-1/4">Product</div>
// //             <div className="w-1/4 text-center">Price</div>
// //             <div className="w-1/4 text-center">Size</div>
// //             <div className="w-1/4 text-center">Color</div>
// //             <div className="w-1/4 text-center">Actions</div>
// //           </div>

// //           {/* Danh sách yêu thích */}
// //           <div className="overflow-hidden rounded-lg">
// //             {wishlistData.length === 0 ? (
// //               <p className="text-center text-gray-500">Your wishlist is empty.</p>
// //             ) : (
// //               wishlistData.map((item) => (
// //                 <div key={item.id} className="border-b p-4 flex items-center hover:bg-gray-50 justify-between">
// //                   {/* Cột sản phẩm */}
// //                   <div className="flex items-center w-1/4">
// //                     <img
// //                       src={item.image}
// //                       alt={item.name}
// //                       className="w-16 h-16 rounded-md border mr-4"
// //                     />
// //                     <div>
// //                       <div className="font-semibold">{item.name}</div>
// //                       <div className="text-sm text-gray-500">{item.description}</div>
// //                     </div>
// //                   </div>

// //                   {/* Cột giá */}
// //                   <div className="w-1/4 text-center">
// //                     <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
// //                   </div>

// //                   {/* Cột kích thước */}
// //                   <div className="w-1/4 text-center">
// //                     <select 
// //                       value={item.size}
// //                       onChange={(e) => handleUpdateSize(item.id, e.target.value)}
// //                       className="border border-gray-300 rounded p-1"
// //                     >
// //                       {sizes.map(size => (
// //                         <option key={size} value={size}>{size}</option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   {/* Cột màu sắc */}
// //                   <div className="w-1/4 text-center">
// //                     <select 
// //                       value={item.color}
// //                       onChange={(e) => handleUpdateColor(item.id, e.target.value)}
// //                       className="border border-gray-300 rounded p-1"
// //                     >
// //                       {colors.map(color => (
// //                         <option key={color} value={color}>{color}</option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   {/* Cột hành động */}
// //                   <div className="flex items-center w-1/4 justify-center">
// //                     <button 
// //                       onClick={() => handleViewDetails(item.id)}
// //                       className="text-gray-500 hover:text-gray-700 mr-2"
// //                     >
// //                       <IoIosArrowForward className="h-6 w-6" />
// //                     </button>
// //                     <button 
// //                       onClick={() => handleRemoveFromWishlist(item.id)}
// //                       className="text-red-500 hover:text-red-700"
// //                     >
// //                       <MdDelete className="h-6 w-6" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Wishlist;


// import React, { useState } from 'react';
// import { IoIosArrowForward } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import Footer from '../Footer';
// import Header from '../Header';

// const Wishlist = ({ wishlist = [] }) => { // Khởi tạo mặc định với một mảng trống
//     return (
//       <div>
//         <Header />
//         <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
//           <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
//             {wishlist.length === 0 ? (
//               <p className="text-center text-gray-500">Your wishlist is empty.</p>
//             ) : (
//               wishlist.map((item) => (
//                 <div key={item.id} className="border-b p-4 flex items-center justify-between">
//                   <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md border mr-4" />
//                   <div className="font-semibold">{item.name}</div>
//                   <div className="text-lg font-bold">{item.price.toLocaleString()} VND</div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };
  
//   export default Wishlist;

import React, { useContext } from 'react';
import { WishlistContext } from '../../store/reducers/WishlistContext';
import Header from '../Header';
import Footer from '../Footer';

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <Header />
      <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
          {wishlist.length === 0 ? (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="border-b p-4 flex items-center justify-between">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md border mr-4" />
                <div className="font-semibold">{item.name}</div>
                <div className="text-lg font-bold">{item.price.toLocaleString()} VND</div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;

import React, { useState } from 'react';
import { IoIosHeart } from "react-icons/io";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
    // State để quản lý việc hiển thị menu
    const [showMenu, setShowMenu] = useState(false);

    // Hàm để bật/tắt menu khi nhấn vào nút
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-[1440px] h-[100px]">
                <div className="flex w-[1226px] items-center justify-center gap-10 relative top-[26px] left-[84px]">
                    <Link to="/" className="relative w-fit [font-family:'Calistoga',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
                        SHU
                    </Link>

                    <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                                <Link to="/shop">Shop</Link>
                            </div>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        <Link to="/sale" className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                            On Sale
                        </Link>
                        <Link to="/new-arrivals" className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                            New Arrivals
                        </Link>
                        <Link to="/brands" className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                            Brands
                        </Link>
                    </div>

                    <div className="flex items-start gap-3 px-4 py-3 relative flex-1 grow bg-[#efefef] rounded-[62px] overflow-hidden">
                        <HiOutlineMagnifyingGlass />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal]">
                            Search for products...
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                        <Link to="/my-wishlist"> {/* Thêm Link đến Wishlist */}
                            <IoIosHeart />
                        </Link>
                        <Link to="/cart"> {/* Thêm Link đến Wishlist */}
                        <FaShoppingCart />
                        </Link>
                        {/* User Icon with Name and Dropdown */}
                        <div className="relative">
                            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMenu}>
                                <FaUserCircle />
                                <span className="text-black">User Name</span>
                                <MdOutlineKeyboardArrowDown />
                            </div>
                            {showMenu && (
                                <div className="absolute right-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                    <ul className="flex flex-col p-2">
                                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                            <Link to="/profile">My Profile</Link>
                                        </li>
                                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                            <Link to="/my-wishlist">Wishlist</Link>
                                        </li>
                                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                            <Link to="/history">History</Link>
                                        </li>
                                        <li className="border-t py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                            <Link to="/signout">Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

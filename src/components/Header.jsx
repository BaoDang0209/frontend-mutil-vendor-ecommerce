import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosHeart } from "react-icons/io";
import { FaShoppingCart, FaUserCircle, FaSignInAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { user_reset } from '../store/reducers/authReducer';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { userInfo, loader } = useSelector(state => state.auth);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    const handleLoginClick = () => {
        navigate('/login');
    };


    const handleLogout = () => {
        dispatch(user_reset()); 
        localStorage.removeItem('customerToken'); 
        navigate('/login'); 
    };

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-[1440px] h-[100px]">
                <div className="flex w-[1226px] items-center justify-center gap-10 relative top-[26px] left-[84px]">
                    <a href="/" className="relative w-fit [font-family:'Calistoga',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
                        DG Ecommerce
                    </a>

                    <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                            Home
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                            Shop
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                           Blog
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                           About us
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                            Contact us
                        </div>
                    </div>

                    <div className="flex items-start gap-3 px-4 py-3 relative flex-1 grow bg-[#efefef] rounded-[62px] overflow-hidden">
                        <HiOutlineMagnifyingGlass />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal]">
                            Search for products...
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                        <IoIosHeart />
                        <FaShoppingCart />
                    
                        {userInfo ? (   
                            <div className="relative">
                                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMenu}>
                                    <FaUserCircle />
                                    <span className="text-black">{userInfo.name}</span>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                {showMenu && (
                                    <div className="absolute right-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                        <ul className="flex flex-col p-2">
                                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">My Profile</li>
                                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Wishlist</li>
                                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">History</li>
                                            <li className="border-t py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                                                Sign Out
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 cursor-pointer" onClick={handleLoginClick}>
                                <FaSignInAlt />
                                <span className="text-black">Login</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

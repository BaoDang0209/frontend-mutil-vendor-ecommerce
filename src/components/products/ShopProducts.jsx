import React, { useEffect, useState  } from 'react';
import { FaEye, FaRegHeart, FaHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { add_to_card,add_to_wishlist,messageClear } from '../../store/reducers/cardReducer';
import toast from 'react-hot-toast';
import Rating from '../Rating';


const ShopProducts = ({styles,products}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userInfo } = useSelector(state => state.auth)
    const {errorMessage,successMessage, wishlist  } = useSelector(state => state.card)
    const [wishlistState, setWishlistState] = useState({});

    useEffect(() => { 
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())  
        } 
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())  
        } 
        
    },[successMessage,errorMessage])

    const add_card = (id) => {
        if (userInfo) {
           dispatch(add_to_card({
            userId: userInfo.id,
            quantity : 1,
            productId : id
           }))
        } else {
            navigate('/login')
        }
    }
    useEffect(() => {
        const initialWishlistState = products.reduce((state, product) => {
            state[product._id] = wishlist.some(item => item.productId === product._id);
            return state;
        }, {});
        setWishlistState(initialWishlistState);
    }, [wishlist, products]);

    const add_wishlist = (pro) => {
        const isInWishlist = wishlist.some(item => item.productId === pro._id);
    
        if (!isInWishlist) {
            dispatch(add_to_wishlist({
                userId: userInfo.id,
                productId: pro._id,
                name: pro.name,
                price: pro.price,
                image: pro.images[0],
                discount: pro.discount,
                rating: pro.rating,
                slug: pro.slug
            })).then(() => {
                setWishlistState(prevState => ({
                    ...prevState,
                    [pro._id]: true
                }));
            });
        } else {
            toast.error("Product is Already in wishlist")
        }

        
    };

    return (
        <div className={`w-full grid ${styles === 'grid' ? 'grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2' : 'grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2'} gap-3 `}>
            {   
                products.map((p, i)=> <div key={i} className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${styles === 'grid' ? 'flex-col justify-start items-start' : 'justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start'} w-full gap-4 bg-white p-1 rounded-md`}>

        <div className={styles === 'grid' ? 'w-full relative group h-[210px] md:h-[270px] xs:h-[170px] overflow-hidden' : 'md-lg:w-full relative group h-[210px] md:h-[270px] overflow-hidden'}>
            <img className='h-[240px] rounded-md md:h-[270px] xs:h-[170px] w-full object-cover' src={ p.images[0] } alt="" />

          <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
             <li 
                onClick={() => add_wishlist(p)} 
                className={`w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full transition-all hover:bg-[#059473] ${wishlistState[p._id] ? 'text-red-500' : 'hover:text-white hover:rotate-[720deg]'}`}
            >
                {wishlistState[p._id] ? <FaHeart /> : <FaRegHeart />}
            </li>
            <Link to={`/product/details/${p.slug}`} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <FaEye />
            </Link> 
            <li onClick={() => add_card(p._id)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <RiShoppingCartLine />
            </li>
        </ul>    
     </div>

     <div className='flex justify-start items-start flex-col gap-1'>
            <h2 className='font-bold'>{ p.name }</h2>
            <div className='flex justify-start items-center gap-3'>
                <span className='text-md font-semibold'>${ p.price }</span>
                <div className='flex'>
                    <Rating ratings={p.rating} />
                </div>

            </div>
        </div>    


                </div>
                
                )
            }
             
        </div>
    );
};

export default ShopProducts;
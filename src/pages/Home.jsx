import React, { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Categorys from '../components/Categorys';
import FeatureProducts from '../components/products/FeatureProducts';
//import Products from '../components/products/Products';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../store/reducers/homeReducer';

const Home = () => {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.home)
    useEffect(() => { 
        dispatch(get_products())
    },[])


    return (
        <div className='w-full'>
            <Header/>
            <Banner/>
            <Categorys/>
            <div className='py-[45px]'>
            <FeatureProducts products={products} />
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
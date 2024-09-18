import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import loginImg from '../assets/login.jpg';

const Register = () => {
    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            {/* Background image */}
            <img className='absolute w-full h-full object-cover mix-blend-overlay z-0' src={loginImg} alt="/" />
        
        <div className='flex justify-center items-center h-full'>
            {/* Form container with z-index to ensure it's above the background */}
            <form className='max-w-[400px] w-full mx-auto bg-white p-8 relative z-10'>
                <h2 className='text-4xl font-bold text-center py-4'>REGISTER!</h2>
                <div className='flex justify-between py-8'>
                    <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                    <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
                </div>
                {/* Input fields */}
                <div className='flex flex-col mb-4'>
                    <label>Username</label>
                    <input className='border relative bg-gray-100 p-2' type="text" />
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Email</label>
                    <input className='border relative bg-gray-100 p-2' type="text" />
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Password</label>
                    <input className='border relative bg-gray-100 p-2' type="password" />
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Confirm Password</label>
                    <input className='border relative bg-gray-100 p-2' type="password" />
                </div>
                {/* Submit button */}
                <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign Up</button>
                {/* Checkbox for agreeing to terms */}
                <p className='flex items-center mt-2'>
                    <input className='mr-2' type="checkbox" />
                    I read and agree to Terms & Conditions
                </p>
                {/* Link to login page */}
                <p className='text-center mt-8'>
                    Already have an account? 
                    <Link to="/login" className='text-indigo-600'>Sign in</Link>
                </p>
            </form>
        </div>
        </div>
    );
};

export default Register;

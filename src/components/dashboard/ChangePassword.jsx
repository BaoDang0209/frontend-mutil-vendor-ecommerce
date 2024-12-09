import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword} from '../../store/reducers/dashboardReducer';

const ChangePassword = () => {
    const dispatch = useDispatch();

    const { userInfo } = useSelector(state => state.auth);
    const { successMessage, errorMessage, loader } = useSelector(state => state.dashboard);
    
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Extract user ID from userInfo
    const userId = userInfo?.id;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId) {
            dispatch(changePassword({ 
                id: userId, // Pass id correctly
                ...formData 
            }));
        } else {
            console.error("");
        }
    };


    return (
        <div className='p-4 bg-white'>
            <h2 className='text-xl text-slate-600 pb-5'>Change Password</h2>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1 mb-2'>
                    <label htmlFor="currentPassword">Old Password</label>
                    <input
                        className='outline-none px-3 py-1 border rounded-md text-slate-600'
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        placeholder='Old Password'
                        value={formData.currentPassword}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col gap-1 mb-2'>
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        className='outline-none px-3 py-1 border rounded-md text-slate-600'
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        placeholder='New Password'
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col gap-1 mb-2'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        className='outline-none px-3 py-1 border rounded-md text-slate-600'
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button
                        className='px-8 py-2 bg-[#059473] shadow-lg hover:shadow-green-500/30 text-white rounded-md'
                        type="submit"
                        disabled={loader}
                    >
                        {loader ? "Updating..." : "Update Password"}
                    </button>
                </div>
            </form>

            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </div>
    );
};

export default ChangePassword;

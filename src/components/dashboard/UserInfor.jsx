import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_infor } from '../../store/reducers/dashboardReducer';
import { FaPen } from 'react-icons/fa'; // Import pen icon

const UserInfor = () => {
    const dispatch = useDispatch();
    const { userInfor, loader, errorMessage } = useSelector(state => state.dashboard);
    const userId = useSelector((state) => state.auth.userInfo?.id);

    const [updateMode, setUpdateMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        image: ''
    });

    useEffect(() => {
        if (userId) {
            dispatch(get_user_infor(userId));
        }
    }, [userId, dispatch]);

    useEffect(() => {
        if (userInfor?.customer) {
            setFormData({
                name: userInfor.customer.name || '',
                email: userInfor.customer.email || '',
                address: userInfor.customer.address || '',
                phoneNumber: userInfor.customer.phoneNumber || '',
                image: userInfor.customer.image || 'default-avatar.png'
            });
        }
    }, [userInfor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result // Set the image preview
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateToggle = () => {
        setUpdateMode(!updateMode);
    };

    const handleSave = () => {
        console.log("Updated data:", formData);
        setUpdateMode(false); // Exit edit mode
    };

    if (loader) return <p className="text-center text-slate-600">Loading...</p>;
    if (errorMessage) return <p className="text-center text-red-600">{errorMessage}</p>;

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl text-slate-600 pb-5 border-b mb-5">User Information</h2>
            <div className="flex flex-col gap-4 text-slate-600">
                <div className="flex items-center gap-4 relative">
                    <img
                        src={formData.image}
                        alt="User"
                        className="w-24 h-24 rounded-full border"
                    />
                    {updateMode && (
                        <>
                            <label htmlFor="imageUpload" className="absolute top-1 right-1 cursor-pointer bg-gray-200 p-2 rounded-full">
                                <FaPen className="text-slate-600" />
                            </label>
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </>
                    )}
                    <div>
                        {updateMode ? (
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="text-2xl font-semibold outline-none px-2 py-1 border rounded-md"
                            />
                        ) : (
                            <h1 className="text-2xl font-semibold">{formData.name}</h1>
                        )}
                        <p className="text-slate-500">{formData.email}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label className="text-sm text-slate-500">Address</label>
                        {updateMode ? (
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="outline-none px-3 py-2 border rounded-md text-slate-600"
                            />
                        ) : (
                            <p className="px-3 py-2 border rounded-md">{formData.address || 'N/A'}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-slate-500">Phone Number</label>
                        {updateMode ? (
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="outline-none px-3 py-2 border rounded-md text-slate-600"
                            />
                        ) : (
                            <p className="px-3 py-2 border rounded-md">{formData.phoneNumber || 'N/A'}</p>
                        )}
                    </div>
                </div>

                <div className="mt-4">
                    {updateMode ? (
                        <div className="flex gap-3">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:shadow-green-500/30"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleUpdateToggle}
                                className="px-4 py-2 bg-gray-400 text-white rounded-md shadow-md hover:shadow-md"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleUpdateToggle}
                            className="px-8 py-2 bg-[#059473] shadow-lg hover:shadow-green-500/30 text-white rounded-md"
                        >
                            Update
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserInfor;

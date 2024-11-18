import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_infor, updateCustomer } from '../../store/reducers/dashboardReducer';
import { FaPen } from 'react-icons/fa'; 

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
        dispatch(updateCustomer({ 
            ...formData
        }))
        .unwrap()
        .then(() => {
            alert("Customer updated successfully!");
            setUpdateMode(false);
        })
        .catch((err) => {
            console.error("Update failed:", err);
            alert("Failed to update customer information.");
            window.location.reload();
        });
    };

    if (loader) return <p className="text-center text-slate-600 mt-20 text-lg">Loading...</p>;
    if (errorMessage) return <p className="text-center text-red-600 mt-20 text-lg">{errorMessage}</p>;

    return (
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 pb-5 border-b mb-5">Hello {formData.name}</h2>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 relative">
                    <img
                        src={formData.image}
                        alt="User"
                        className="w-28 h-28 rounded-full border shadow-md"
                    />
                    {updateMode && (
                        <>
                            <label htmlFor="imageUpload" className="absolute top-1 right-1 cursor-pointer bg-gray-100 p-2 rounded-full shadow-sm hover:bg-gray-200">
                                <FaPen className="text-gray-600" />
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
                                className="text-2xl font-semibold outline-none px-2 py-1 border rounded-md focus:ring-2 focus:ring-green-400"
                            />
                        ) : (
                            <h1 className="text-2xl font-semibold text-gray-800">{formData.name}</h1>
                        )}
                        <p className="text-gray-500">{formData.email}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500">Address</label>
                        {updateMode ? (
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="outline-none px-3 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-green-400"
                            />
                        ) : (
                            <p className="px-3 py-2 border rounded-md bg-gray-100">{formData.address || 'N/A'}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500">Phone Number</label>
                        {updateMode ? (
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="outline-none px-3 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-green-400"
                            />
                        ) : (
                            <p className="px-3 py-2 border rounded-md bg-gray-100">{formData.phoneNumber || 'N/A'}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    {updateMode ? (
                        <div className="flex gap-3">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md transition hover:bg-green-700 hover:shadow-lg"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleUpdateToggle}
                                className="px-4 py-2 bg-gray-400 text-white rounded-md shadow-md transition hover:bg-gray-500 hover:shadow-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleUpdateToggle}
                            className="px-8 py-2 bg-green-600 shadow-lg hover:shadow-xl text-white rounded-md transition hover:bg-green-700"
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

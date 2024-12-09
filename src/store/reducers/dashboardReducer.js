import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 
import { jwtDecode } from "jwt-decode";

export const get_dashboard_index_data = createAsyncThunk(
    'dashboard/get_dashboard_index_data',
    async(userId, { rejectWithValue,fulfillWithValue }) => {
        try {
            const {data} = await api.get(`/home/customer/get-dashboard-data/${userId}`) 
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const get_user_infor = createAsyncThunk(
    'dashboard/get_user_infor',
    async (userId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const token = localStorage.getItem('customerToken');
            
            if (!token) {
                throw new Error("No token found");
            }
            
            const decodedToken = jwtDecode(token);
            console.log("Decoded Token:", decodedToken);

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await api.get(`/get-customer/${userId}`, config);
            return fulfillWithValue(data);
        } catch (error) {
            console.error("Error fetching user information:", error);

            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

export const changePassword = createAsyncThunk(
    'dashboard/change-password',
    async ({ id, currentPassword, newPassword, confirmPassword }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const token = localStorage.getItem('customerToken');
            
            if (!token) {
                throw new Error("No token found");
            }

            const decodedToken = jwtDecode(token);
            console.log("Decoded Token:", decodedToken);
            
            if (!id) {
                throw new Error("User ID is required to change password.");
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            };

            // Include the user ID in the API call
            const { data } = await api.put(`/update-password/${id}`, {
                currentPassword,
                newPassword,
                confirmPassword
            }, config);            

            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);


export const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState:{
        recentOrders : [], 
        errorMessage : '',
        successMessage: '', 
        totalOrder: 0,
        pendingOrder: 0,
        cancelledOrder: 0,
        userInfor: null, 
        loader: false
    },
    reducers : {

        messageClear : (state,_) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
 
    },
    extraReducers: (builder) => {
        builder
        .addCase(get_user_infor.pending, (state) => {
            state.loader = true;
        })
        .addCase(get_user_infor.rejected, (state, { payload }) => {
            state.errorMessage = payload || "Failed to fetch user information";
            state.loader = false;
        })
        .addCase(get_user_infor.fulfilled, (state, { payload }) => {
            state.userInfor = payload;
            state.loader = false;
            state.successMessage = "User information loaded successfully.";
        })

        .addCase(get_dashboard_index_data.pending, (state) => {
            state.loader = true;
        })
        .addCase(get_dashboard_index_data.fulfilled, (state, { payload }) => {
            state.totalOrder = payload.totalOrder;
            state.pendingOrder = payload.pendingOrder;
            state.cancelledOrder = payload.cancelledOrder;
            state.recentOrders = payload.recentOrders;
            state.loader = false;
        })
        .addCase(get_dashboard_index_data.rejected, (state, { payload }) => {
            state.errorMessage = payload?.error || "Failed to load dashboard data";
            state.loader = false;
        })
        .addCase(changePassword.pending, (state) => {
            state.loader = true;
            state.errorMessage = "";
            state.successMessage = "";
        })
        .addCase(changePassword.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = "Password updated successfully";
        })
        .addCase(changePassword.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = typeof payload === 'object' ? JSON.stringify(payload) : payload || "Failed to change password";
        });
        
    }
})
export const {messageClear} = dashboardReducer.actions
export default dashboardReducer.reducer
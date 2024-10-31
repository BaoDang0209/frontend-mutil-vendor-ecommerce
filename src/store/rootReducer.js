import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";
import chatReducer from "./reducers/chatReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import homeReducer from "./reducers/homeReducer";
import orderReducer from "./reducers/orderReducer";
import wishlistReducer from './reducers/WishlistContext';

const rootReducer = {
    home: homeReducer,
    auth: authReducer,
    card: cardReducer,
    order: orderReducer,
    dashboard: dashboardReducer,
    chat: chatReducer
}
export default rootReducer;
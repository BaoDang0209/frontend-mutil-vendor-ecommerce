import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import wishlistReducer from './reducers/WishlistContext';


const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
// // src/store/rootReducer.js
// import { combineReducers } from '@reduxjs/toolkit';
// import wishlistReducer from './reducers/wishlistSlice';
// // Import thêm các reducer khác nếu có

// const rootReducer = combineReducers({
//   wishlist: wishlistReducer,
//   // Thêm các reducer khác tại đây
// });

// export default rootReducer;

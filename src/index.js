import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { Toaster } from 'react-hot-toast';
import { WishlistProvider  } from './store/reducers/WishlistContext';
import { CartProvider  } from './store/reducers/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <WishlistProvider>
    <CartProvider>
    <Suspense>
    <App /> 
    <Toaster
      toastOptions={{
        position : 'top-right',
        style : {
          background : '#283046',
          color : 'white'
        }
      }} 
    />
    </Suspense>
    </CartProvider>
    </WishlistProvider>
    
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

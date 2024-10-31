import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from sessionStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Function to update sessionStorage whenever the cart changes
  const updateSessionStorage = (updatedCart) => {
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    
    let updatedCart;
    if (existingProductIndex !== -1) {
      // If product exists, update its quantity
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
      // If product does not exist, add it to the cart
      updatedCart = [...cart, product];
    }

    setCart(updatedCart);
    updateSessionStorage(updatedCart); // Save updated cart to sessionStorage
  };

  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const discountRate = 0.1;
  const deliveryFee = 30000;
  const getTotal = () => getSubtotal() * (1 - discountRate) + deliveryFee;

  return (
    <CartContext.Provider value={{ cart, addToCart, getSubtotal, getTotal, discountRate, deliveryFee }}>
      {children}
    </CartContext.Provider>
  );
};

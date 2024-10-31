import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_category } from '../store/reducers/homeReducer';

const LoadCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_category());
  }, [dispatch]);

  return null; // Không cần render gì ở đây
};

export default LoadCategories;
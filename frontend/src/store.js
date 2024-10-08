import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,  // Register the product slice reducer
  },
});

export default store;

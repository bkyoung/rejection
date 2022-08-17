import { configureStore } from '@reduxjs/toolkit';
import rejectionReducer from '../features/rejection/rejectionSlice.js';

const store = configureStore({
  reducer: {
    questions: rejectionReducer 
  }
});

export default store;

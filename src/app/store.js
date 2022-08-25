import { configureStore } from '@reduxjs/toolkit';
import rejectionReducer from '../features/rejection/rejectionSlice.js';
import userReducer from '../features/user/userSlice.js';

const store = configureStore({
  reducer: {
    questions: rejectionReducer,
    user: userReducer,
  }
});

export default store;

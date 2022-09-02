import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import questionReducer from '../features/question/questionSlice.js';
import userReducer from '../features/user/userSlice.js';
import rootSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    questions: questionReducer,
    user: userReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

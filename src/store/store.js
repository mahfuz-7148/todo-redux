import { configureStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import todoReducer from './todoSlice.js';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  preloadedState: load(), // localStorage theke load hobe
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(save()), // auto save hobe
})
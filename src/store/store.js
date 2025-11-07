import { configureStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import todoReducer from './todoSlice.js';

const persistConfig = {
  namespace: 'todoApp',
  states: ['todos']
};

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  preloadedState: load(persistConfig),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(save(persistConfig))
})
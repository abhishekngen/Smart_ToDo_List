import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice.js';
import categoriesReducer from '../features/categories/categoriesSlice.js';
import categoryFilterReducer from '../features/categoryFilter/categoryFilterSlice.js';


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
    categoryFilter: categoryFilterReducer
  },
});

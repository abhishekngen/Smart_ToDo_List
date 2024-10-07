import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['General', 'Home']
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        removeCategory: (state, action) => {
            state.categories.splice(state.categories.findIndex(category => category === action.payload), 1);
        }
    }
});

export const {addCategory, removeCategory} = categoriesSlice.actions;

export const selectCategories = state => state.categories.categories;

export default categoriesSlice.reducer;

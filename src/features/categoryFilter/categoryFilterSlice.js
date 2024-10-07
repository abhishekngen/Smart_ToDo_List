import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryFilter: ['General']
};

const categoryFilterSlice = createSlice({
    name: 'categoryFilter',
    initialState: initialState,
    reducers: {
        addCategoryToFilter: (state, action) => {
            state.categoryFilter.push(action.payload);
        },
        removeCategoryFromFilter: (state, action) => {
            const index = state.categoryFilter.findIndex(category => category === action.payload);
            if(index !== -1) state.categoryFilter.splice(index, 1);
        },
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
        }
    }
});

export const {addCategoryToFilter, removeCategoryFromFilter, setCategoryFilter} = categoryFilterSlice.actions;

export const selectCategoryFilter = state => state.categoryFilter.categoryFilter;

export default categoryFilterSlice.reducer;

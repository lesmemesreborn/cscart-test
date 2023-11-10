import {createSelector, createSlice} from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: [],
    reducers: {
        setFilters: (state, action) => {
            return action.payload
        },
        resetFilters: () => {
            return []
        },
    },
});

export const {
    setFilters,
    resetFilters,
} = filterSlice.actions;

export const selectSelectedFilters = createSelector(
    (state) => state.filters.selectedFilters,
    (selectedFilters) => selectedFilters
);
export default filterSlice.reducer;

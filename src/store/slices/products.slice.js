import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name: 'products',
    initialState: {
        productsStore: [],
        categoryProductStore: [],
        tagsStore:[],
        suppliersStore:[],
        sizesStore:[],
        collectionsStore:[]
    },
    reducers: {
        allProducts: (state, action) => {
            state.productsStore = action.payload;
        },
        allCategoriesProducts: (state, action) => {
            state.categoryProductStore = action.payload;
        },
        allTags: (state, action) => {
            state.tagsStore = action.payload;
        },
        allSuppliers: (state, action) => {
            state.suppliersStore = action.payload;
        },
        allSizes: (state, action) => {
            state.sizesStore = action.payload;
        },
        allCollections: (state, action) => {
            state.collectionsStore = action.payload;
        },
       
    }
});

export const { allProducts, allCategoriesProducts, allTags, allSuppliers, allSizes, allCollections } = products.actions;
export default products.reducer;

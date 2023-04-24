import {configureStore} from "@reduxjs/toolkit"

import productsReducer, {productsFetch} from "../slices/productsSlice";


const store = configureStore({

    reducer: {
        products: productsReducer
    },
});

export default store;


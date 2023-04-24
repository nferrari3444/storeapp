import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {setHeaders} from "./api"
import {url} from "../api/index";

import axios from "axios";

const initialState = {
    items: [],
    status: null,
    createStatus: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const response = await axios.get(

            );
        
            return response.data;
        } 
            catch(error) {
            console.log(error);
        }
    }
)

export const productsCreate = createAsyncThunk(
    "products/productsCreate",
    
    // The values is an object that is coming from our form whenever we submit it 
    async (values) => {
        try {
            const response = await axios.post(
                `${url}/product`,
                 values,
                 setHeaders()
            );
        
            return response.data;
        } 
            catch(error) {
            console.log(error);
            toast.error(error.response.data)
        }
    }
)


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending] : (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled] : (state, action) => {
            state.items = action.payload;
            state.status = "success";
        },

        [productsFetch.rejected] : (state,action) => {
            state.status = "rejected";
        } ,

        [productsCreate.pending] : (state, action) => {
            state.createStatus = "pending";
        },
        [productsCreate.fulfilled] : (state, action) => {
            // push our product from the api to the array
            state.items.push(action.payload);
            state.createStatus = "success";
            toast.success("Product Created");
        },

        [productsCreate.rejected] : (state,action) => {
            state.createStatus = "rejected";
        }

    },
});


export default productsSlice.reducer;
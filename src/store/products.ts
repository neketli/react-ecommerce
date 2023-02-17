import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "~/models/Product";
import { getProductsApi } from "~/services/products";

interface ProductsState {
	list: Product[]
}


const initialState: ProductsState = {
	list: []
}

export const getProducts = createAsyncThunk(
	'getProducts',
	async () => {
		const response = await getProductsApi()
		return response
	}
)

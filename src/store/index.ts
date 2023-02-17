import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		products
	}
})

export const useStoreDispatch = () => useDispatch<typeof 
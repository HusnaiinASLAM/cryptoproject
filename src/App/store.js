import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { CryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer:{
        [CryptoApi.reducerPath] : CryptoApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(CryptoApi.middleware)
});
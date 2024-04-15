import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slice"


const Store = configureStore({
    reducer: {
        Auth: AuthReducer
    }
})

export default Store
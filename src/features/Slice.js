import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "./AuthService";




const initialState = {
    user: [],
    isLading: false,
    isSuccess: false,
    isError: false,
    message: "",
    Singledata : [{name :"rohan"},
    {name :"rohan"}]

}
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchData.pending, (state) => {
            state.isLading = true
        }).addCase(FetchData.fulfilled, (state, action) => {
            state.isSuccess = true,
                state.isLading = false,
                state.user = action.payload

        }).addCase(FetchData.rejected, (state, action) => {
            state.isLading = false,
                state.isSuccess = false
            state.isError = true
            state.message = action.payload
        }).addCase(fetchSingle.pending , (state)=>{
            state.isLading = true
        }).addCase(fetchSingle.fulfilled , (state , action ) =>{
            state.isSuccess = true
            state.isLading = false
            state.Singledata = action.payload
        }).addCase(fetchSingle.rejected , (state , action)=>{
            state.isError = true
            state.isSuccess = false
            state.message= action.payload
        })
    }

})

export const FetchData = createAsyncThunk("fetch/data", async () => {
    try {
        return AuthService.FetchuserData()
    } catch (error) {
        console.log(error)
    }
})

export const fetchSingle = createAsyncThunk("single/data" , async(id)=>{
    try {
        return AuthService.singleData(id)
    } catch (error) {
         console.log(error)
    }
})

export default AuthSlice.reducer
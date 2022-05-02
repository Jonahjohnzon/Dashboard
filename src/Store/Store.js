import { configureStore } from "@reduxjs/toolkit";
import Myslice from './CreateSlice'
export default configureStore({
    reducer:{
     Location:Myslice
    }
})
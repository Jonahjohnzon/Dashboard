import { createSlice } from "@reduxjs/toolkit";
const initial={
    state:['']
}
const Myslice=createSlice({
    name:'path',
    initialState:{
        path:''
    },
    reducers:{
       setpath:(state,action)=>{
           state.path=action.payload;
       }
    }
})
export const{setpath}= Myslice.actions;
export default Myslice.reducer;
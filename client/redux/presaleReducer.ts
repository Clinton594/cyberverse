import { createSlice } from "@reduxjs/toolkit";

const presaleSlice = createSlice({
  name:"presale",
  initialState:{
    loading:false,
    balance:0,
    wallet:"",
    isConnected:false,
  },
  reducers:{
    setWallet:(state:object, {payload})=>{
      state.wallet = payload;
    },
    setConnection: (state:object, {payload})=>{      
      state.isConnected = payload;
    }
  }
});

export const { setWallet, setConnection } = presaleSlice.actions;
export default presaleSlice.reducer;
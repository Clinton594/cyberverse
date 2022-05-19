import { createSlice, Slice } from "@reduxjs/toolkit";
import { IinitialState } from "../types";

const initialState: IinitialState = {
  loading: false,
  walletIsVisible: true,
  balance: 0,
  chainId: 0,
  wallet: "",
  isConnected: true,
  isAdmin: true,
};

const presaleSlice: Slice = createSlice({
  name: "presale",
  initialState,
  reducers: {
    setWalletVisibility: (state: IinitialState, { payload }) => {
      state.walletIsVisible = payload;
    },
    setWallet: (state: IinitialState, { payload }) => {
      state.wallet = payload;
    },
    setConnection: (state: IinitialState, { payload }) => {
      state.isConnected = payload;
    },
    setBalance: (state: IinitialState, { payload }) => {
      state.balance = payload;
    },
    setChainId: (state: IinitialState, { payload }) => {
      state.chainId = payload;
    },
    setIsAdmin: (state: IinitialState, { payload }) => {
      state.isAdmin = payload;
    },
  },
});

export const { setWallet, setConnection, setBalance, setChainId, setWalletVisibility, setIsAdmin } =
  presaleSlice.actions;
export default presaleSlice.reducer;

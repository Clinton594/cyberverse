import { createSlice, Slice } from "@reduxjs/toolkit";

interface IinitialState {
  wallet: string;
  loading: boolean;
  balance: number;
  isConnected: boolean;
  chainId: number;
}

const initialState: IinitialState = {
  loading: false,
  balance: 0,
  chainId: 0,
  wallet: "",
  isConnected: false,
};

const presaleSlice: Slice = createSlice({
  name: "presale",
  initialState,
  reducers: {
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
  },
});

export type { IinitialState };
export const { setWallet, setConnection, setBalance, setChainId } = presaleSlice.actions;
export default presaleSlice.reducer;

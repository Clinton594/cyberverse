import { configureStore, Reducer, Slice } from "@reduxjs/toolkit";
import presale from "./presaleReducer";
import status from "./statusReducer";
import contract from "./contractReducer";

interface IStore {
  presale: any;
  status: any;
  contract: any;
}
const reducer: IStore = {
  presale,
  status,
  contract,
};

const store = configureStore({ reducer });

export type { IStore };
export default store;

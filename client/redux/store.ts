import { configureStore, Reducer, Slice } from "@reduxjs/toolkit";
import presale from "./presaleReducer";
import status from "./statusReducer";

interface IStore {
  presale: any;
  status: any;
}
const reducer: IStore = {
  presale,
  status,
};

const store = configureStore({ reducer });

export type { IStore };
export default store;

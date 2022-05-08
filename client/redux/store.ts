import { configureStore, Reducer, Slice } from "@reduxjs/toolkit";
import presale from "./presaleReducer";

interface IStore {
  presale: any;
}
const reducer: IStore = {
  presale,
};

const store = configureStore({ reducer });

export type { IStore };
export default store;

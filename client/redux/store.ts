import { configureStore, Reducer, Slice } from "@reduxjs/toolkit";
import presale from "./presaleReducer";
import status from "./statusReducer";
import contract from "./contractReducer";
import { IStore } from "../types";

const reducer: IStore = {
  presale,
  status,
  contract,
};

const store = configureStore({ reducer });

export default store;

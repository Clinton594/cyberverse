import { configureStore } from "@reduxjs/toolkit";
import presale from "./presaleReducer";

const store = configureStore({
  reducer:{
    presale
  },
});

export default store
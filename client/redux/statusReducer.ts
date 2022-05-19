import { createSlice } from "@reduxjs/toolkit";
import { Itoast } from "../types/";

export const defaultStatus: Itoast = { title: "", message: "", status: false, loading: false, show: false };

const statusSlice = createSlice({
  name: "status",
  initialState: defaultStatus,
  reducers: {
    setLoading: (state: Itoast, { payload }) => {
      state.loading = payload;
    },
    setToast: (state: Itoast, { payload }) => {
      state.title = payload.title;
      state.message = payload.message;
      state.status = payload.status;
      state.show = payload.show;
    },
  },
});

export const { setLoading, setToast } = statusSlice.actions;
export default statusSlice.reducer;

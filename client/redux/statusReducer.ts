import { createSlice } from "@reduxjs/toolkit";

interface Itoast {
  title: string | unknown;
  message: string | unknown;
  status: boolean | unknown;
  loading: boolean;
  show: boolean;
}

export const defaultStatus: Itoast = { title: "", message: "", status: false, loading: false, show: false };

const statusSlice = createSlice({
  name: "status",
  initialState: defaultStatus,
  reducers: {
    setLoading: (state: Itoast, { payload }) => {
      state.loading = payload;
    },
    setToast: (state: Itoast, { payload }) => {
      state = { ...state, ...payload };
    },
  },
});

export type { Itoast };
export const { setLoading, setToast } = statusSlice.actions;
export default statusSlice.reducer;

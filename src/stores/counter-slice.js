import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    addBy: (state, { type, payload }) => {
      // state - payload
      console.log(state);
      console.log(payload);
      console.log(type);
      return state - payload;
    },
  },
});

export const { increment, decrement, addBy } = counterSlice.actions;

export default counterSlice.reducer;

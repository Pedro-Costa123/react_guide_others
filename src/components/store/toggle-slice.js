import { createSlice } from "@reduxjs/toolkit";

const initialStateToggle = { toggle: false };
const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialStateToggle,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export default toggleSlice;

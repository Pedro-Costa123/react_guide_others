import { createSlice } from "@reduxjs/toolkit";

const initialStateToggle = { toggle: false, notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialStateToggle,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice;

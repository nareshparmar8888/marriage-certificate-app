// dashboardReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginData: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState: initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.isLoginData = action.payload;
    },
  },
});

// Extract the reducer function from the slice
export const applicationReducer = applicationSlice.reducer;

// Export the action creator as well, if needed
export const { setLoginData } = applicationSlice.actions;

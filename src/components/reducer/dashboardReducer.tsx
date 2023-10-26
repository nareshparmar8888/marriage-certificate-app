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


export const applicationReducer = applicationSlice.reducer;

export const { setLoginData } = applicationSlice.actions;

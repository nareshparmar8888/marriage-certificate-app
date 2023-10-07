import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginData: [],
};

const applicationReducer = createSlice({
  name: "application",
  initialState: initialState,
  reducers: {
    isLoginData: (state: any, action: any) => {
      state.isLoginData = action.payload;
    },
  },
});

export const applicationAction = applicationReducer.action;
export default applicationReducer;

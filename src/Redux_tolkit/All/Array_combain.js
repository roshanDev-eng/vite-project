import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  combined: [], // will hold combined Listings and Offers
};
const All = createSlice({
  name: "Listing",
  initialState,
  reducers: {
    setCombined: (state, action) => {
      state.combined = action.payload;
    },
  },
});

export const { setCombined } = All.actions;

export default All.reducer;

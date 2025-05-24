import { configureStore } from "@reduxjs/toolkit";
import agentReducer from "./Agent/agentSlice";
import Listing_Offer_array from "./Listing/Listing_Offer_array";
import All from "./All/Array_combain";
import Transaction from "./Transaction/Transaction";

const store = configureStore({
  reducer: {
    agents: agentReducer,
    Listing_Offer: Listing_Offer_array,
    All: All,
    Transaction: Transaction,
    // other reducers...
  },
  // DevTools are enabled by default in development
  // You can explicitly enable/disable it if needed:
  devTools: import.meta.env.MODE === "development",
});

export default store;

import { createSlice, current } from "@reduxjs/toolkit";
import Listing_array_globel, {
  Offer_array_globel,
} from "../../Globel_Arrays/Complete_Lis_Off_Tran/Listing_array_globle";

const initialState = {};

const Updateslice = createSlice({
  name: "Listing",
  initialState,
  reducers: {
    updateOfferField: (state, action) => {
      const { id, type, value, array } = action.payload;
      const offerIndex = state.Offers.findIndex(
        (offer) => offer.offerid === id
      );
      if (offerIndex !== -1) {
        array[offerIndex][type] = value;
      }
    },
  },
});

export const { updateOfferField } = Updateslice.actions;
export default Updateslice.reducer;

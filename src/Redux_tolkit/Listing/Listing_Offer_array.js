import { createSlice, current } from "@reduxjs/toolkit";
import Listing_array_globel, {
  Offer_array_globel,
  Transaction_array,
} from "../../Globel_Arrays/Complete_Lis_Off_Tran/Listing_array_globle";
import Fileds from "../../Globel_Arrays/Fileds";

const initialState = {
  Listings: Listing_array_globel,
  Offers: Offer_array_globel,
  Transaction_array: Transaction_array,
};

const ListingSlice = createSlice({
  name: "Listing",
  initialState,
  reducers: {
    addListing: (state, action) => {
      const { formData } = action.payload;
      state.Listings.push({
        Listing_id: `L${state.Listings.length + 1}`,
        offerid: "",
        ...formData,
      });
    },
    addOffer: (state, action) => {
      const { formData, listingid } = action.payload;
      state.Offers.push({
        ...formData,
        offerid: `O${state.Offers.length + 1}`,
        listingid: "",
      });
    },
    convert_to: (state, action) => {
      const { Offerdata, listingid } = action.payload;
      const Index = state["Listings"].findIndex(
        (item) => item["Listing_id"] === listingid
      );
      const listing_Data = state["Listings"][Index];

      const objectdata = {
        Agents: [
          ...(Offerdata.Agents || []),
          ...(current(listing_Data.Agents) || []),
        ],
        Clients: [
          ...(Offerdata.Clients || []),
          ...(current(listing_Data.Clients) || []),
        ],
        Offer_info: Offerdata.Offer_info,
        address: listing_Data.address,
        offerid: `O${state.Offers.length + 1}`,
        listingid: listingid,
      };
      state.Offers.push(objectdata);
    },
    updateField: (state, action) => {
      const { id, name, value, arrayname, objname, idname } = action.payload;
      const Index = state[arrayname].findIndex((item) => item[idname] === id);
      if (Index !== -1) {
        state[arrayname][Index][objname][name] = value;
      }
    },
    Delete_Agent_Client_Loywer: (state, action) => {
      const { arrayname, id, agentid, idname, object_name } = action.payload;
      console.log(arrayname, id, agentid, idname, object_name);
      const Index = state[arrayname].findIndex((item) => item[idname] === id);

      if (Index !== -1) {
        // Dynamically determine the key based on the object_name
        const idKey = object_name === "Clients" ? "clientId" : "agentId";
        console.log(object_name);
        state[arrayname][Index][object_name] = state[arrayname][Index][
          object_name
        ].filter((item) => item[idKey] !== agentid);
      }
    },
    add_Agent_Client_Loywer: (state, action) => {
      const { id, object_name, data, arrayname } = action.payload;
      const index = state[arrayname].findIndex(
        (item) =>
          item.Listing_id === id ||
          item.offerid === id ||
          item.Transaction_id === id
      );
      if (index !== -1) {
        const current = state[arrayname][index][object_name] || [];
        state[arrayname][index][object_name] = [...current, ...data];
      }
    },
    Offercomplete: (state, action) => {
      const { data, offerid } = action.payload;
      console.log(offerid);
      state.Transaction_array.push({
        Transaction_id: `T${state.Transaction_array.length + 1}`,
        offerid: offerid,
        Loyers: [{}],
        ...data,
      });
    },
  },
});

export const {
  convert_to,
  addListing,
  addOffer,
  updateField,
  Delete_Agent_Client_Loywer,
  add_Agent_Client_Loywer,
  Offercomplete,
} = ListingSlice.actions;

export default ListingSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";
import Fileds from "../../Globel_Arrays/Fileds";

const initialState = {
  agents: [
    {
      Agent_id: "125",
      [Fileds.Name.key]: "John",
      [Fileds.Code.key]: "0307",
      Province: "Otario",
      LASTNAME: "Doe",
      GMAIL: "john@example.com",
      CITY: "Toronto",
      [Fileds.Address.key]: "123 Queen St W",
      code: "123",
    },
    {
      Agent_id: "124",
      [Fileds.Name.key]: "Jane",
      [Fileds.Code.key]: "0307",
      Province: "xyz",
      LASTNAME: "Smith",
      GMAIL: "jane@example.com",
      CITY: "Vancouver",
      [Fileds.Address.key]: "123 Queen St W",
      code: "123",
    },
    {
      Agent_id: "123",
      [Fileds.Name.key]: "murtaza",
      [Fileds.Code.key]: "325",
      LASTNAME: "Smith",
      GMAIL: "alimurtaza@example.com",
      Province: "abc",
      CITY: "Vancouver",
      [Fileds.Address.key]: "123 Queen St W",
      code: "123",
    },
  ],
  montlyfee: [],
  invoiceprofile: [],
};
let conter = 1;
let day = 1;
let month = 1;
const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    addAgent: (state, action) => {
      state.agents.push(action.payload);
    },
    removeAgent: (state, action) => {
      state.agents = state.agents.filter(
        (agent) => agent._id !== action.payload
      );
    },
    updateInvoiceProfileCheckbox: (state, action) => {
      const { rowIndex, key, id } = action.payload;
      const section = state["invoiceprofile"].filter((item) => item.id === id);
      if (Array.isArray(section) && section[rowIndex]) {
        section[rowIndex][key] = !section[rowIndex][key];
      }
    },
    updateInvoiceCheckvalue: (state, action) => {
      const { rowIndex, key, value, id } = action.payload;
      const section = state["invoiceprofile"].filter((item) => item.id === id);
      if (section && section[rowIndex]) {
        section[rowIndex][key] = value;
      }
    },
    INVOICINGPROFILE: (state, action) => {
      const { newrows } = action.payload;
      state.invoiceprofile.push(newrows);
    },
    INVOICESAGENT: (state, action) => {
      const { monthlyfee, id } = action.payload;
      const name = state.agents.find((item) => item.Agent_id === id);
      console.log(current(name));
      if (Number(monthlyfee?.VALUE) > 0) {
        state.montlyfee.push({
          agentid: name.Agent_id,
          [Fileds.Number.key]: conter,
          [Fileds.DATE.key]: `${day}-${month}-2025`,
          [Fileds.Name.key]: name.Name,
          [Fileds.BALANCE.key]: monthlyfee.VALUE,
          [Fileds.BALANCE_To.key]: monthlyfee.VALUE,
          [Fileds.STATUS.key]: "New",
          [Fileds.SYNC.key]: "",
        });
        conter++;
        day++;
        month++;
      }
    },
    updateAgent: (state, action) => {
      const index = state.agents.findIndex(
        (agent) => agent._id === action.payload._id
      );
      if (index !== -1) {
        state.agents[index] = action.payload;
      }
    },
  },
});

export const {
  updateInvoiceCheckvalue,
  updateInvoiceProfileCheckbox,
  addAgent,
  removeAgent,
  INVOICESAGENT,
  INVOICINGPROFILE,
  updateAgent,
} = agentSlice.actions;
export default agentSlice.reducer;

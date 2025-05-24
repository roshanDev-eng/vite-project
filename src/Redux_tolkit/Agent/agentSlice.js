import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: [
    {
      _id: "1",
      FIRST_NAME: "John",
      LASTNAME: "Doe",
      GMAIL: "john@example.com",
      CITY: "Toronto",
      ADDRESS: "123 Queen St W",
    },
    {
      _id: "2",
      FIRST_NAME: "Jane",
      LASTNAME: "Smith",
      GMAIL: "jane@example.com",
      CITY: "Vancouver",
      ADDRESS: "456 Burrard St",
    },
  ],
};

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

export const { addAgent, removeAgent, updateAgent } = agentSlice.actions;
export default agentSlice.reducer;

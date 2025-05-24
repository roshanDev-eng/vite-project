import { createSlice, current } from "@reduxjs/toolkit";
import Fileds from "../../Globel_Arrays/Fileds";

const initialState = {
  agents: [
    {
      agentId: "125",
      [Fileds.Name.key]: "murtaza",
      [Fileds.Type.key]: "seler",
      [Fileds.Commission.key]: "200",
      [Fileds.Iscommission.key]: "yes",
    },
    {
      agentId: "124",
      [Fileds.Name.key]: "ali",
      [Fileds.Type.key]: "seler",
      [Fileds.Commission.key]: "200",
      [Fileds.Iscommission.key]: "yes",
    },
  ],
  trustDeposits: [],
  trustLedger: [],
  totalBalance: 0,
  Trust_model_On_off: false,
  counter: 0,
};
let receiptCounter = 1;
const Transaction = createSlice({
  name: "Listing",
  initialState,
  reducers: {
    handelopen: (state, action) => {
      const { on, off, editName, counter } = action.payload;
      if (on === true) {
        state[editName] = on;
      }
      if (off === false) {
        state[editName] = false;
      }
      if (counter === "next") {
        state.counter += 1;
      }
      if (counter === "pre") {
        state.counter -= 1;
      }
    },
    addDeposit: (state, action) => {
      const { name, date, balance } = action.payload;
      const commission = balance * 0.13;
      const totalAmount = balance + commission;
      // Add to deposits
      state.trustDeposits.push({
        name,
        date,
        balance: totalAmount.toFixed(2),
        status: "Deposited",
      });

      // Add to ledger
      state.trustLedger.push({
        name,
        date,
        receipt: `R-${receiptCounter++}`,
        deposit: totalAmount.toFixed(2),
        withdrawal: 0,
      });

      // Update total balance
      state.totalBalance += totalAmount;
    },
    withdrawAmount: (state, action) => {
      const { agentId, name, amount } = action.payload;
      const date = new Date().toISOString().split("T")[0];

      // Check if agent with this agentId exists
      const isAgent = state.agents.some((agent) => agent.agentId === agentId);

      if (!isAgent) {
        console.warn(
          `Agent with ID "${agentId}" not found. Withdrawal denied.`
        );
        return;
      }

      // Agent is valid, process withdrawal
      if (state.totalBalance >= amount) {
        // Full withdrawal
        state.trustLedger.push({
          name,
          date,
          receipt: `R-${receiptCounter++}`,
          deposit: 0,
          withdrawal: amount,
        });
        state.totalBalance -= amount;
      } else if (state.totalBalance > 0) {
        // Partial withdrawal
        const partialAmount = state.totalBalance;
        state.trustLedger.push({
          name,
          date,
          receipt: `R-${receiptCounter++}`,
          deposit: 0,
          withdrawal: partialAmount,
        });
        state.totalBalance = 0;
      } else {
        // No balance - still log request
        state.trustLedger.push({
          name,
          date,
          receipt: `R-${receiptCounter++}`,
          deposit: 0,
          withdrawal: amount,
        });
      }
    },
  },
});

export const { addDeposit, withdrawAmount, handelopen } = Transaction.actions;

export default Transaction.reducer;

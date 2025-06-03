import { createSlice, current } from "@reduxjs/toolkit";
import Fileds from "../../Globel_Arrays/Fileds";

const initialState = {
  updateid: 0,
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
  formData: {
    BALANCE: "0",
    CURRENCY: "$",
    DATE: "2025-05-28",
    "DUE Date": "aaa",
    HST: "aa",
    Invoice: "2222",
    Name: "aaa",
    "PAYMENTS TYPES": "aa",
    PRICE: "2000",
    Payments_types: "a",
    QUANTITY: "3",
    "RECEIVED AS": "aa",
    Received_as: "a",
    STATUS: "Paid",
    SUBTOTAL: 6000.0,
    "USE SALES": "aaaa",
    currency: "aaa",
  },
  trustDeposits: [],
  trustLedger: [],
  trustWithdrawalLedger: [], // <- Invoice
  invoice_ledger: [],
  trustDepositLedger: [], // <- NEW array only for deposits
  statement: [],
  totalBalance: 0,
  Transactionfee: 0,
  Invoice_Model_update_on_off: false,
  Statement_Model_update_on_off: false,
  Trust_model_On_off: false,
  Invoice_model_On_off: false,
  Statement_model_On_off: false,
  Statement_manual_model_On_off: false,
  Invoice_manual_model_On_off: false,
  counter: 1,
};
let receiptCounter = 1;
const Transaction = createSlice({
  name: "Transaction",
  initialState,
  reducers: {
    Undateid: (state, action) => {
      const { index } = action.payload;
      state.updateid = index;
    },
    Handelmodel: (state, action) => {
      const { on, off, editName, counter } = action.payload;
      if (on === true) {
        state[editName] = on;
      }
      if (off === false) {
        state[editName] = false;
        state.counter = 1;
      }
      if (counter === "next") {
        state.counter += 1;
      }
      if (counter === "pre") {
        state.counter -= 1;
      }
    },
    updateFormField: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    updateField: (state, action) => {
      const { updatedata, arrayname } = action.payload;
      state[arrayname][state.updateid].BALANCE = updatedata.BALANCE;
      console.log(updatedata);
      console.log(current(state[arrayname][state.updateid]));
      state.invoice_ledger.push(updatedata);
    },
    addDeposit: (state, action) => {
      const { name, agent_id, transaction_id, date, balance } = action.payload;
      const commission = Math.floor(balance * 0.13);
      const totalAmount = balance + commission;
      const counter = receiptCounter++;
      const depositRecord = {
        Name: name,
        agent_id,
        transaction_id,
        DATE: date,
        BALANCE: totalAmount,
        RECEIPT: `R-${counter}`,
        REMAINING: totalAmount,
        STATUS: "New",
      };

      const ledgerRecord = {
        Name: name,
        DATE: date,
        agent_id,
        transaction_id,
        RECEIPT: `R-${counter}`,
        DEPOSIT: totalAmount,
        WITHDRAWAL: 0,
      };

      // Push to general deposits
      state.trustDeposits.push(depositRecord);

      // Push to full ledger
      state.trustLedger.push(ledgerRecord);

      // Push to deposit-only ledger
      state.trustDepositLedger.push(ledgerRecord); // <- NEW

      state.totalBalance += totalAmount;
    },
    withdrawAmount: (state, action) => {
      const { agentId, name, amount, Trustinclud, transaction_id } =
        action.payload;
      const date = new Date().toISOString().split("T")[0];
      const counter = receiptCounter++;

      let remainingToWithdraw = amount;
      const ledgerEntries = [];

      for (const deposit of state.trustDeposits) {
        if (remainingToWithdraw <= 0) break;

        if (deposit.REMAINING > 0) {
          const deduction = Math.min(deposit.REMAINING, remainingToWithdraw);
          // Calculate 13% of the deduction
          const bonus = deduction * 0.13;
          const totalBalance = deduction + bonus;
          if (Trustinclud === "Yes") {
            deposit.REMAINING -= totalBalance;
            remainingToWithdraw -= totalBalance;
          }

          const withdrawalRecord = {
            Name: name,
            DATE: date,
            transaction_id,
            agentId,
            RECEIPT: `R-${counter}`,
            DEPOSIT: 0,
            WITHDRAWAL: totalBalance,
          };

          ledgerEntries.push(withdrawalRecord);

          // Push to withdrawal-only ledger
          state.trustWithdrawalLedger.push({
            Name: name,
            agentId,
            DATE: date,
            transaction_id,
            RECEIPT: `R-${counter}`,
            STATUS: "New",
            BALANCE: totalBalance, // <- deduction + 13%
            BALANCE_To: totalBalance, // <- deduction + 13%
          });
        }
      }

      state.trustLedger.push(...ledgerEntries);
      state.totalBalance -= amount - remainingToWithdraw;

      if (remainingToWithdraw > 0) {
        console.warn(`${remainingToWithdraw} couldn't be withdrawn.`);
      }
    },
    Statement: (state, action) => {
      const counter = receiptCounter++;
      const {
        trnasactionfee,
        Transaction_price,
        agent_commission,
        name,
        agentId,
        transaction_id,
        date,
      } = action.payload;

      const totalBalance = (agent_commission * Transaction_price) / 100; // => 600
      const transactionfee = trnasactionfee
        .filter((item) => item.id === agentId && item.TRAN)
        .reduce((sum, item) => sum + parseFloat(item.VALUE || 0), 0);

      const statement = {
        Name: name,
        DATE: date.OFFERDATE,
        transaction_id,
        agentId,
        RECEIPT: `R-${counter}`,
        DEPOSIT: 0,
        BALANCE: totalBalance - transactionfee,
        BALANCE_To: totalBalance,
        STATUS: "new",
      };
      receiptCounter = 0;
      state.statement.push(statement);
    },
  },
});

export const {
  Statement,
  Undateid,
  addDeposit,
  withdrawAmount,
  updateField,
  Handelmodel,
  updateFormField,
} = Transaction.actions;

export default Transaction.reducer;

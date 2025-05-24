import { useSelector } from "react-redux";
import Heading from "../../../Globel_Arrays/Heading";
import { updateField } from "../../../Redux_tolkit/Listing/Listing_Offer_array";
import {
  handelopen,
  withdrawAmount,
} from "../../../Redux_tolkit/Transaction/Transaction";

export const getuseselectervalue = () => {
  return {
    Transaction_show: useSelector(
      (state) => state.Listing_Offer.Transaction_array
    ),
    trustLedger: useSelector((state) => state.Transaction.trustLedger),
    trustDeposits: useSelector((state) => state.Transaction.trustDeposits),
    totalBalance: useSelector((state) => state.Transaction.totalBalance),
    Trust_model_on_off: useSelector(
      (state) => state.Transaction.Trust_model_On_off
    ),
    Trust_Counter: useSelector((state) => state.Transaction.counter),
  };
};
export const getdispatchfunctios = (dispatch, objects) => {
  return {
    Transaction_Heading: [
      Heading.Agents,
      Heading.Clients,
      Heading.Loyers,
      Heading.TRUST_DEPOSITS,
      Heading.TRUST_LEDGER,
      Heading.INVOICES,
      Heading.STATEMENT,
      Heading.LISTING,
    ],
    buttonList: [
      {
        text: "Deposit",
        offClick: () =>
          dispatch(handelopen({ off: false, editName: "Trust_model_On_off" })),
        onClickon: () =>
          dispatch(handelopen({ on: true, editName: "Trust_model_On_off" })),
        next: () => dispatch(handelopen({ counter: "next" })),
        pre: () => dispatch(handelopen({ counter: "pre" })),
      },
      {
        text: "Withdraw",
        offClick: () => dispatch(),
        onClickon: () =>
          dispatch(
            withdrawAmount({
              agentsarray: objects.Agents,
              agentId: "124",
              name: "murtaza",
              amount: 2000,
            })
          ),
      },
      {
        text: "Ledger Entry",
        offClick: () => dispatch(),
        onClickon: () =>
          dispatch(
            addLedgerEntry({
              name: "Alice",
              date: "2025-05-11",
              deposit: 3000,
              withdrawal: 0,
            })
          ),
      },
      {
        text: "Add Agent",
        offClick: () => dispatch(),
        onClickon: () => console.log("Add Agent"),
      },
      {
        text: "Add Lawyer",
        offClick: () => dispatch(),
        onClickon: () => console.log("Add Lawyer"),
      },
      {
        text: "Add Transaction",
        offClick: () => dispatch(),
        onClickon: () => console.log("Add Transaction"),
      },
    ],
    handleInputChange: (arrayname, idname, objname, id) => {
      return (e) => {
        const { name, value } = e.target;
        dispatch(
          updateField({
            arrayname,
            idname,
            objname,
            id,
            name,
            value,
          })
        );
      };
    },
  };
};

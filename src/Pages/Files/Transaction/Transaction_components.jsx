import { useSelector } from "react-redux";
import Heading from "../../../Globel_Arrays/Heading";
import {
  Delete_Agent_Client_Loywer,
  updateField,
} from "../../../Redux_tolkit/Listing/Listing_Offer_array";
import {
  Handelmodel,
  Undateid,
  withdrawAmount,
} from "../../../Redux_tolkit/Transaction/Transaction";
import { useMemo } from "react";

export const getuseselectervalue = () => {
  const Transaction_show = useSelector(
    (state) => state.Listing_Offer.Transaction_array
  );
  const Invoice_Model_update_on_off = useSelector(
    (state) => state.Transaction.Invoice_Model_update_on_off
  );
  const Statement_Model_update_on_off = useSelector(
    (state) => state.Transaction.Statement_Model_update_on_off
  );
  const trustWithdrawalLedger = useSelector(
    (state) => state.Transaction.trustWithdrawalLedger
  );
  const trustLedger = useSelector((state) => state.Transaction.trustLedger);
  const Invoice_model = useSelector(
    (state) => state.Transaction.Invoice_model_On_off
  );
  const Statement_model_Button = useSelector(
    (state) => state.Transaction.Statement_model_On_off
  );
  const Statement_manual_model = useSelector(
    (state) => state.Transaction.Statement_manual_model_On_off
  );
  const Invoice_manual_model = useSelector(
    (state) => state.Transaction.Invoice_manual_model_On_off
  );
  const trustDeposits = useSelector((state) => state.Transaction.trustDeposits);
  const statement = useSelector((state) => state.Transaction.statement);
  const totalBalance = useSelector((state) => state.Transaction.totalBalance);
  const Trust_model_on_off = useSelector(
    (state) => state.Transaction.Trust_model_On_off
  );
  const Trust_Counter = useSelector((state) => state.Transaction.counter);

  return useMemo(
    () => ({
      Invoice_Model_update_on_off,
      Statement_Model_update_on_off,
      trustWithdrawalLedger,
      Transaction_show,
      trustLedger,
      statement,
      Invoice_model,
      Statement_model_Button,
      Statement_manual_model,
      Invoice_manual_model,
      trustDeposits,
      totalBalance,
      Trust_model_on_off,
      Trust_Counter,
    }),
    [
      Invoice_Model_update_on_off,
      Statement_Model_update_on_off,
      trustWithdrawalLedger,
      Transaction_show,
      trustLedger,
      statement,
      Invoice_model,
      Statement_model_Button,
      Statement_manual_model,
      Invoice_manual_model,
      trustDeposits,
      totalBalance,
      Trust_model_on_off,
      Trust_Counter,
    ]
  );
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
    Invoiceupdate_Heading: [Heading.STATEMENT],
    updateidfuntion: ({ index }) => dispatch(Undateid({ index })),
    UpdateObject: {
      Invoice: {
        id: "5",
        delete_agent_loyers: ({ sectionKey, row, index, id }) =>
          dispatch(
            Delete_Agent_Client_Loywer({
              arrayname: "Transaction_array", // Assuming you're deleting from Listings
              id: id, // The Listing ID from URL
              agentid: row.agentId || row.clientId, // Works for both agents and clients
              idname: "Transaction_id", // The field in Listing to match
              object_name: sectionKey, // "Agents" or "Clients"
            })
          ),
        offClick: () =>
          dispatch(
            Handelmodel({ off: false, editName: "Invoice_Model_update_on_off" })
          ),
        onClickon: () =>
          dispatch(
            Handelmodel({ on: true, editName: "Invoice_Model_update_on_off" })
          ),
        next: () => dispatch(Handelmodel({ counter: "next" })),
        pre: () => dispatch(Handelmodel({ counter: "pre" })),
      },
      Statement: {
        id: "6",
        offClick: () =>
          dispatch(
            Handelmodel({
              off: false,
              editName: "Statement_Model_update_on_off",
            })
          ),
        onClickon: () =>
          dispatch(
            Handelmodel({ on: true, editName: "Statement_Model_update_on_off" })
          ),
        next: () => dispatch(Handelmodel({ counter: "next" })),
        pre: () => dispatch(Handelmodel({ counter: "pre" })),
      },
    },
    buttonList: [
      {
        id: "0",
        text: "Trust",
        offClick: () =>
          dispatch(Handelmodel({ off: false, editName: "Trust_model_On_off" })),
        onClickon: () =>
          dispatch(Handelmodel({ on: true, editName: "Trust_model_On_off" })),
        next: () => dispatch(Handelmodel({ counter: "next" })),
        pre: () => dispatch(Handelmodel({ counter: "pre" })),
      },
      {
        id: "1",
        text: "Invoice",
        offClick: () =>
          dispatch(
            Handelmodel({ off: false, editName: "Invoice_model_On_off" })
          ),
        onClickon: () =>
          dispatch(Handelmodel({ on: true, editName: "Invoice_model_On_off" })),
        next: () => dispatch(Handelmodel({ counter: "next" })),
        pre: () => dispatch(Handelmodel({ counter: "pre" })),
      },
      {
        id: "2",
        text: "statement",
        offClick: () =>
          dispatch(
            Handelmodel({ off: false, editName: "Statement_model_On_off" })
          ),
        onClickon: () =>
          dispatch(
            Handelmodel({ on: true, editName: "Statement_model_On_off" })
          ),
        next: () => dispatch(Handelmodel({ counter: "next" })),
        pre: () => dispatch(Handelmodel({ counter: "pre" })),
      },
      {
        id: "3",
        text: "Manual statement",
        offClick: () =>
          dispatch(
            Handelmodel({
              off: false,
              editName: "Statement_manual_model_On_off",
            })
          ),
        onClickon: () =>
          dispatch(
            Handelmodel({ on: true, editName: "Statement_manual_model_On_off" })
          ),
        next: () => dispatch(Handelmodel({ counter: "next" })),
        pre: () => dispatch(Handelmodel({ counter: "pre" })),
      },
      {
        id: "4",
        text: "Manual Invoice",
        offClick: () =>
          dispatch(
            Handelmodel({ off: false, editName: "Invoice_manual_model_On_off" })
          ),
        onClickon: () =>
          dispatch(
            Handelmodel({ on: true, editName: "Invoice_manual_model_On_off" })
          ),
        next: () => dispatch(Handelmodel({ counter: "next" })),
        pre: () => dispatch(Handelmodel({ counter: "pre" })),
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

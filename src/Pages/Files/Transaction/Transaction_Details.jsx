import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Multiple_input from "../../../Component/input/multiple_input";
import Short_Components from "../../../Component/Show_component/Show_component";
import input_Heading from "../../../Globel_Arrays/Input_Heading";
import Icons from "../../../Component/Icons/Icons";
import { useDispatch } from "react-redux";
import Agent_client_loyers from "../../../Component/Models/Agent_client_loyers";
import {
  getdispatchfunctios,
  getuseselectervalue,
} from "./Transaction_components";
import { Models } from "./models/Models";
import { Delete_Agent_Client_Loywer } from "../../../Redux_tolkit/Listing/Listing_Offer_array";

const Offer_Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    Transaction_show,
    trustLedger,
    trustWithdrawalLedger,
    trustDeposits,
    statement,
  } = getuseselectervalue();

  const transactionData = Transaction_show.find(
    (data) => data.Transaction_id === id
  );

  if (!transactionData) {
    return <div>Transaction not found for ID: {id}</div>;
  }

  const objects = {
    STATEMENT: statement.filter((data) => data.transaction_id === id),
    TRUST_LEDGER: trustLedger.filter((data) => data.transaction_id === id),
    TRUST_DEPOSITS: trustDeposits.filter((data) => data.transaction_id === id),
    LISTING: [
      {
        MLS: "001",
        PRICE: "50000",
        REGISTERED: "2025-04-15",
        EXPIRE: "3000",
        CREATED: "new",
        TYPE: "50000",
        STATUS: "50000",
      },
    ],
    INVOICES: trustWithdrawalLedger.filter(
      (data) => data.transaction_id === id
    ),
    Agents: transactionData?.Agents || [],
    Clients: transactionData?.Clients || [],
    Loyers: transactionData?.Loyers || [],
  };

  const getFieldType = (heading) => {
    if (input_Heading.Transaction_Heading.optionBasedFields.includes(heading))
      return "options";
    if (input_Heading.Transaction_Heading.dateFields.includes(heading))
      return "date";
    return "text";
  };

  const fieldTypes =
    input_Heading.Transaction_Heading.fieldKeys.map(getFieldType);

  const fieldOptions = input_Heading.Transaction_Heading.fieldKeys.map(
    (heading) => {
      const opts = input_Heading.Transaction_Heading.options[heading] || [];
      return opts.map((o) => ({ label: o, value: o }));
    }
  );

  const [dataMap, setDataMap] = useState({
    modelopen: false,
    selectedRow: null,
    selectedIndex: null,
    selectedSection: null,
  });

  const handleAdd = (sectionKey) => {
    console.log(sectionKey);
    setDataMap({
      modelopen: true,
      selectedSection: sectionKey,
      selectedIndex: null,
      selectedRow: null,
    });
  };

  const {
    UpdateObject,
    buttonList,
    updateidfuntion,
    Transaction_Heading,
    handleInputChange,
  } = getdispatchfunctios(dispatch, objects);

  const handleDeleteClick = (sectionKey, row, index) => {
    updateidfuntion({ index: index });
    console.log(sectionKey);

    if (sectionKey === "Agents" || sectionKey === "Clients") {
      console.log("hhhh");
      dispatch(
        Delete_Agent_Client_Loywer({
          arrayname: "Transaction_array",
          id,
          agentid: row.agentId || row.clientId,
          idname: "Transaction_id",
          object_name: sectionKey,
        })
      );
    }

    if (sectionKey === "STATEMENT") {
      UpdateObject.Statement.onClickon({});
    }
    if (sectionKey === "INVOICES") {
      UpdateObject.Invoice.onClickon({});
    }
  };

  return (
    <div className="flex">
      <div className="w-[90%]">
        <Heading_Component ui="All" text={`Details for`} />

        <Agent_client_loyers
          visible={dataMap.modelopen}
          index={id}
          agentData={dataMap.selectedRow}
          selectedSection={dataMap.selectedSection}
          arrayname="Transaction_array"
          onClose={() =>
            setDataMap({
              modelopen: false,
              selectedSection: null,
              selectedRow: null,
              selectedIndex: null,
            })
          }
        />

        <Multiple_input
          onchange={handleInputChange(
            "Transaction_array",
            "Transaction_id",
            "Offer_info",
            id
          )}
          value={transactionData?.Offer_info}
          heading={input_Heading.Transaction_Heading.fieldHeadings}
          Array={input_Heading.Transaction_Heading.fieldKeys}
          type={fieldTypes}
          options={fieldOptions}
          row="grid-cols-3"
          cols="col-span-3"
        />

        {Transaction_Heading.map((section, idx) => (
          <Short_Components
            key={idx}
            Cols={section.cols}
            Array_H={section.fields.map((f) => f.label)}
            Array_V={objects[section.key]?.map((row, index) => (
              <div
                key={index}
                className={`bg-white mb-2 grid ${section.cols} p-2 relative`}
              >
                {section.fields.map((f, i) => (
                  <div key={i}>{row[f.key] ?? "-"}</div>
                ))}
                {section.Button && (
                  <button
                    onClick={() => handleDeleteClick(section.key, row, index)}
                    className="absolute top-2 right-2 text-black px-2 py-1 rounded text-sm"
                  >
                    <Icons.Cross />
                  </button>
                )}
              </div>
            ))}
            Size={section.size}
            Button={section.button}
            Heading={section.heading}
            onButtonClick={() => handleAdd(section.key)}
          />
        ))}
      </div>

      <Models arrays={buttonList} id={id} />
    </div>
  );
};

export default Offer_Details;

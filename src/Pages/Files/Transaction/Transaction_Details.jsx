import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Multiple_input from "../../../Component/input/multiple_input";
import Short_Components from "../../../Component/Show_component/Show_component";
import Heading from "../../../Globel_Arrays/Heading";
import input_Heading from "../../../Globel_Arrays/Input_Heading";
import Icons from "../../../Component/Icons/Icons";
import Side_Bar_button from "../../../Component/Layout/Side_Bar_button";
import { useDispatch, useSelector } from "react-redux";
import Agent_client_loyers from "../../../Component/Models/Agent_client_loyers";
import {
  getdispatchfunctios,
  getuseselectervalue,
} from "./Transaction_components";
import { Models } from "./models/Models";

const Offer_Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Transaction_show, trustLedger, trustDeposits, totalBalance } =
    getuseselectervalue();
  const fineds = Transaction_show.find((data) => data.Transaction_id === id);
  console.log(trustLedger, trustDeposits, totalBalance);

  const objects = {
    STATEMENT: [
      {
        Name: "50000",
        NUMBER: "001",
        DATE: "2025-04-15",
        BALANCE: "3000",
        BALANCE_To: "4000",
        STATUS: "new",
        SYNC: "50000",
      },
    ],
    TRUST_LEDGER: [
      {
        NUMBER: "001",
        Name: "50000",
        DATE: "2025-04-15",
        BALANCE: "3000",
        STATUS: "new",
        SYNC: "50000",
      },
    ],
    TRUST_DEPOSITS: [
      {
        NUMBER: "001",
        Name: "50000",
        DATE: "2025-04-15",
        BALANCE: "3000",
        STATUS: "new",
        SYNC: "50000",
      },
    ],
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
    INVOICES: [
      {
        NUMBER: "001",
        Name: "50000",
        DATE: "2025-04-15",
        BALANCE: "3000",
        STATUS: "new",
        SYNC: "50000",
      },
    ],
    Agents: fineds?.Agents || [],
    Clients: fineds?.Clients || [],
    Loyers: fineds?.Loyers || [],
  };

  // Find the field types (options, date, text)
  const fieldTypes = input_Heading.Transaction_Heading.fieldKeys.map(
    (heading) =>
      input_Heading.Transaction_Heading.optionBasedFields.includes(heading)
        ? "options"
        : input_Heading.Transaction_Heading.dateFields.includes(heading)
        ? "date"
        : "text"
  );

  // Map field options
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

  const { buttonList, Transaction_Heading, handleInputChange } =
    getdispatchfunctios(dispatch, objects);

  // Add the handleAdd function to open the form
  const handleAdd = (sectionKey) => {
    setDataMap({
      ...dataMap,
      modelopen: true, // Open the form
      selectedSection: sectionKey,
      selectedIndex: null,
      selectedRow: null,
    });
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
          value={fineds?.Offer_info}
          heading={input_Heading.Transaction_Heading.fieldHeadings}
          Array={input_Heading.Transaction_Heading.fieldKeys}
          type={fieldTypes}
          options={fieldOptions}
          row="grid-cols-3"
          cols="col-span-3"
        />
        {Transaction_Heading.map((section, idx) => {
          return (
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
                      onClick={() => handleEditClick(section.key, row, index)}
                      className="absolute top-2 right-2 text-black px-2 py-1 rounded text-sm"
                    >
                      <Icons.edit />
                    </button>
                  )}
                </div>
              ))}
              Size={section.size}
              Button="Add"
              Heading={section.heading}
              onButtonClick={() => handleAdd(section.key)} // Pass handleAdd to onButtonClick
            />
          );
        })}
      </div>
      <Models arrays={buttonList} />
    </div>
  );
};

export default Offer_Details;

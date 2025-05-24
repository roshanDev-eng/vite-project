import React, { useState } from "react";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Short_Components from "../../../Component/Show_component/Show_component";
import EditModal from "../../../Component/Models/Editmodal";
import Heading from "../../../Globel_Arrays/Heading";

const Agent_Details = () => {
  const [editSection, setEditSection] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const officeData = [
    { Name: "Ali", Code: "0022", Address: "123 Main St" },
    { Name: "Sara", Code: "0091", Address: "456 Maple Ave" },
  ];
  const InvoicingProfile = [
    {
      PRODUCT: "50000",
      VALUE: "2025-04-15",
      Per: "",
      TRAN: "Lease",
      VAR: "No",
      MIN: "50000",
      MAX: "2025-04-15",
      TYPE: "",
    },
  ];
  const RecurringPayments = [
    {
      Name: "50000",
      RecStatus: "2025-04-15",
      Status: "",
      Amount: "Lease",
      Date: "No",
      Applied: "50000",
    },
  ];
  const INVOICESAGENT = [
    {
      NUMBER: "001",
      Name: "50000",
      DATE: "2025-04-15",
      BALANCE: "3000",
      STATUS: "new",
      TOTALBALANCE: "Lease",
      SYNC: "50000",
    },
  ];
  const INVOICESAGENTTRAN = [
    {
      NUMBER: "001",
      Name: "50000",
      DATE: "2025-04-15",
      BALANCE: "3000",
      STATUS: "new",
      TOTALBALANCE: "Lease",
      SYNC: "50000",
    },
  ];
  const STATEMENT = [
    {
      NUMBER: "001",
      Name: "50000",
      DATE: "2025-04-15",
      BALANCE: "3000",
      STATUS: "new",
      SYNC: "50000",
    },
  ];
  const SHOWINGREQUEST = [
    {
      ADDRESS: "001",
      AGENT: "50000",
      BROKERAGE: "2025-04-15",
      START: "3000",
      END: "new",
      STATUS: "50000",
    },
  ];
  const LISTING = [
    {
      MLS: "001",
      PRICE: "50000",
      REGISTERED: "2025-04-15",
      EXPIRE: "3000",
      CREATED: "new",
      TYPE: "50000",
      STATUS: "50000",
    },
  ];
  const OFFER = [
    {
      ID: "001",
      PRICE: "50000",
      DEPOSIT: "2025-04-15",
      RELEASEDATE: "3000",
      STATUS: "new",
      CONDITION: "50000",
      POSITION: "50000",
    },
  ];
  const TRANSACTION = [
    {
      NUMBER: "001",
      PRICE: "50000",
      OFFERDATE: "2025-04-15",
      CLOSING: "3000",
      CREATED: "new",
      TYPE: "50000",
      STATUS: "50000",
    },
  ];
  const [dataMap, setDataMap] = useState({
    Office: officeData,
    InvoicingProfile: InvoicingProfile,
    RecurringPayments: RecurringPayments,
    INVOICESAGENT: INVOICESAGENT,
    INVOICESAGENTTRAN: INVOICESAGENTTRAN,
    STATEMENT: STATEMENT,
    SHOWINGREQUEST: SHOWINGREQUEST,
    LISTING: LISTING,
    OFFER: OFFER,
    TRANSACTION: TRANSACTION,
  });
  const Agents_details = [
    Heading.Office,
    Heading.InvoicingProfile,
    Heading.RecurringPayments,
    Heading.INVOICESAGENT,
    Heading.INVOICESAGENTTRAN,
    Heading.STATEMENT,
    Heading.SHOWINGREQUEST,
    Heading.LISTING,
    Heading.OFFER,
    Heading.TRANSACTION,
  ];

  const handleEditClick = (sectionKey, rowData, rowIndex) => {
    setEditSection(sectionKey);
    setEditData(rowData);
    setEditIndex(rowIndex);
    setShowModal(true);
  };

  const handleSave = () => {
    const newData = [...dataMap[editSection]];
    newData[editIndex] = editData;

    setDataMap((prev) => ({
      ...prev,
      [editSection]: newData,
    }));

    setShowModal(false);
  };

  return (
    <div className="flex">
      <div className="w-[90%]">
        <Heading_Component ui="All" text="Details" />

        {Agents_details.map((section, idx) => (
         <Short_Components
  key={idx}
  Cols={section.cols}
  Array_H={section.fields.map((f) => f.label)}
  Array_V={dataMap[section.key]?.map((row, index) => (
    <div
      key={index}
      className={`bg-white mb-2 grid ${section.cols} p-2 relative`}
    >
      {section.fields.map((f, i) => (
        <div key={i}>{row[f.key] ?? "-"}</div>
      ))}
      <button
        onClick={() => handleEditClick(section.key, row, index)}
        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm"
      >
        Edit
      </button>
    </div>
  ))}
  Size={section.size}
  Button="Edit"
  Heading={section.heading}
  onButtonClick={() =>
    handleEditClick(section.key, dataMap[section.key]?.[0], 0)
  }
/>

        ))}

        {showModal && editSection && (
          <EditModal
            title={`Edit ${editSection}`}
         fields={Agents_details.find((s) => s.key === editSection)?.fields || []}
            data={editData}
            setData={setEditData}
            onSave={handleSave}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Agent_Details;

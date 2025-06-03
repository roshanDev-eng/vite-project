import React, { useEffect, useState } from "react";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Heading from "../../../Globel_Arrays/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionContainer from "./components/SectionContainer";
import Fileds from "../../../Globel_Arrays/Fileds";

const Agent_Details = () => {
  const { id } = useParams();
  const agentsList = useSelector((state) => state.agents?.agents) || [];
  const agent = agentsList.find((item) => item.Agent_id === id) || {};
  const monthly = useSelector((state) => state.agents.montlyfee);
  const invoiceprofile = useSelector((state) => state.agents.invoiceprofile);
  // ✅ Track only needed data in state
  const data = {
    Office: [agent],
    InvoicingProfile: invoiceprofile.filter((item) => item.id === id),
    RecurringPayments: [],
  };

  // ✅ Filter to find monthlyFee
  const filterFees = (sectionKey, type) => {
    const rows = data[sectionKey] || [];

    if (type === "monthly")
      return rows.find((r) => !r.Per && !r.TRAN && !r.VAR);
    if (type === "transaction") return rows.find((r) => r.TRAN);
    if (type === "percentage") return rows.filter((r) => r.Per);
    if (type === "var") return rows.filter((r) => r.VAR);
    return rows;
  };

  const monthlyFees = filterFees("InvoicingProfile", "monthly");
  const transactionfees = filterFees("InvoicingProfile", "transaction");
  // ✅ Only pass INVOICESAGENT data separately when rendering
  const Agents_details = [
    Heading.Office,
    Heading.InvoicingProfile,
    // Heading.RecurringPayments,
    Heading.INVOICESAGENT,
    Heading.INVOICESAGENTTRAN,
    Heading.STATEMENT,
    Heading.SHOWINGREQUEST,
    Heading.LISTING,
    Heading.OFFER,
    Heading.TRANSACTION,
  ];

  return (
    <div className="flex">
      <div className="w-[90%]">
        <Heading_Component ui="All" text="Details" />
        {Agents_details.map((section, i) => (
          <SectionContainer
            key={i}
            section={section}
            data={
              section === Heading.INVOICESAGENT
                ? {
                    INVOICESAGENT: [...monthly]
                      .filter((item) => item.agentid === id)
                      .reverse(),
                  } // 🟢 send only static data here
                : data
            }
            setData={""}
            Transactionfee={transactionfees}
            id={id}
            monthlyfee={monthlyFees}
          />
        ))}
      </div>
    </div>
  );
};

export default Agent_Details;

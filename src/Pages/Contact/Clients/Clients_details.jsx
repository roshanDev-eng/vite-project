import React, { useEffect, useState } from "react";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Heading from "../../../Globel_Arrays/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionContainer from "./components/SectionContainer";
import Fileds from "../../../Globel_Arrays/Fileds";

const Agent_Details = () => {
  const { id } = useParams();

  // ✅ Only pass INVOICESAGENT data separately when rendering
  const Agents_details = [
    Heading.Office,
    Heading.InvoicingProfile,
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
          <></>
        ))}
      </div>
    </div>
  );
};

export default Agent_Details;

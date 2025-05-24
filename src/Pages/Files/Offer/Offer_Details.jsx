import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Multiple_input from "../../../Component/input/multiple_input";
import Short_Components from "../../../Component/Show_component/Show_component";
import Heading from "../../../Globel_Arrays/Heading";
import input_Heading from "../../../Globel_Arrays/Input_Heading";
import Icons from "../../../Component/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  Delete_Agent_Client_Loywer,
  Offercomplete,
  updateField,
} from "../../../Redux_tolkit/Listing/Listing_Offer_array";
import Agent_client_loyers from "../../../Component/Models/Agent_client_loyers";
import Side_Bar_button from "../../../Component/Layout/Side_Bar_button";

const Offer_Details = () => {
  const dispatch = useDispatch();
  const Offerdata = useSelector((state) => state.Listing_Offer.Offers);
  const { id } = useParams();
  const fined = Offerdata.find((item) => item.offerid === id);
  const [finalizedOffers, setFinalizedOffers] = useState({});
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
  const Agents = fined?.Agents || [];
  const Clients = fined?.Clients || [];
  const [dataMap, setDataMap] = useState({
    modelopen: false,
    selectedRow: null,
    selectedIndex: null,
    selectedSection: null,
  });

  const objects = {
    LISTING,
    TRANSACTION,
    Agents,
    Clients,
  };

  const Offer_Heading = [
    Heading.Agents,
    Heading.Clients,
    Heading.LISTING,
    Heading.TRANSACTION,
  ];

  const fieldTypes = input_Heading.Offer_Heading.fieldKeys.map((heading) =>
    input_Heading.Offer_Heading.optionBasedFields.includes(heading)
      ? "options"
      : input_Heading.Offer_Heading.dateFields.includes(heading)
      ? "date"
      : "text"
  );

  const fieldOptions = input_Heading.Offer_Heading.fieldKeys.map((heading) => {
    const opts = input_Heading.Offer_Heading.options[heading] || [];
    return opts.map((o) => ({ label: o, value: o }));
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateField({
        arrayname: "Offers",
        idname: "offerid",
        objname: "Offer_info",
        id,
        name,
        value,
      })
    );
  };

  const handleDeleteClick = (sectionKey, row, index) => {
    dispatch(
      Delete_Agent_Client_Loywer({
        arrayname: "Offers",
        id,
        agentid: row.agentId || row.clientId,
        idname: "offerid",
        object_name: sectionKey,
      })
    );
  };

  const handleAdd = (sectionKey) => {
    setDataMap({
      modelopen: true,
      selectedSection: sectionKey,
      selectedIndex: null,
      selectedRow: null,
    });
  };

  const handleFinalizeOffer = (offerId) => {
    if (!finalizedOffers[offerId]) {
      dispatch(Offercomplete({ data: fined, offerid: offerId }));
      setFinalizedOffers((prev) => ({
        ...prev,
        [offerId]: true,
      }));
    }
  };

  return (
    <div className="flex">
      <div className="w-[90%]">
        <Heading_Component ui="All" text={`Details for Offer`} />

        <Agent_client_loyers
          visible={dataMap.modelopen}
          index={id}
          agentData={dataMap.selectedRow}
          selectedSection={dataMap.selectedSection}
          arrayname="Offers"
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
          onchange={handleInputChange}
          value={fined?.Offer_info}
          heading={input_Heading.Offer_Heading.fieldHeadings}
          Array={input_Heading.Offer_Heading.fieldKeys}
          type={fieldTypes}
          options={fieldOptions}
          row="grid-cols-3"
          cols="col-span-3"
        />

        {Offer_Heading.map((section, idx) => (
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
            Button="add"
            Heading={section.heading}
            onButtonClick={() => handleAdd(section.key)}
          />
        ))}
      </div>

      {/* Finalize Offer Button */}
      <div className="flex flex-col gap-3 w-[15%] p-10">
        <Side_Bar_button
          text={
            finalizedOffers[fined.offerid]
              ? "Offer Finalized"
              : "Finalize Offer"
          }
          onClick={() => handleFinalizeOffer(fined.offerid)}
          disabled={finalizedOffers[fined.offerid]}
        />
      </div>
    </div>
  );
};

export default Offer_Details;

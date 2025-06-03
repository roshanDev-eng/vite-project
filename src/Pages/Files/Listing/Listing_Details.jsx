import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  add_Agent_Client_Loywer,
  Delete_Agent_Client_Loywer,
} from "../../../Redux_tolkit/Listing/Listing_Offer_array";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Multiple_input from "../../../Component/input/multiple_input";
import Short_Components from "../../../Component/Show_component/Show_component";
import Heading from "../../../Globel_Arrays/Heading";
import input_Heading from "../../../Globel_Arrays/Input_Heading";
import Agent_client_loyers from "../../../Component/Models/Agent_client_loyers";
import Icons from "../../../Component/Icons/Icons";

const Listing_Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Listing_slice = useSelector((state) => state.Listing_Offer.Listings);

  const fined = Listing_slice.find((item) => item.Listing_id === id);
  const Agents = fined?.Agents || [];
  const Clients = fined?.Clients || [];

  const [dataMap, setDataMap] = useState({
    modelopen: false,
    selectedSection: null,
    selectedIndex: null,
    selectedRow: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateField({
        arrayname: "Listings",
        idname: "Listing_id",
        objname: "Listinginfo",
        id,
        name,
        value,
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
  const handleDeleteClick = (sectionKey, row, index) => {
    dispatch(
      Delete_Agent_Client_Loywer({
        arrayname: "Listings", // Assuming you're deleting from Listings
        id: id, // The Listing ID from URL
        agentid: row.agentId || row.clientId, // Works for both agents and clients
        idname: "Listing_id", // The field in Listing to match
        object_name: sectionKey, // "Agents" or "Clients"
      })
    );
  };

  const Listing_Heading = [
    Heading.Agents,
    Heading.Clients,
    Heading.OFFER,
    Heading.TRANSACTION,
  ];

  const objects = {
    Agents,
    Clients,
    OFFER: fined?.OFFER || [],
    TRANSACTION: fined?.TRANSACTION || [],
  };
  console.log(Heading.Agents);
  console.log(Agents);
  const fieldTypes = input_Heading.Listing_Heading.fieldKeys.map((key) =>
    input_Heading.Listing_Heading.optionBasedFields.includes(key)
      ? "options"
      : input_Heading.Listing_Heading.dateFields.includes(key)
      ? "date"
      : "text"
  );

  const fieldOptions = input_Heading.Listing_Heading.fieldHeadings.map(
    (heading) =>
      (input_Heading.Listing_Heading.options[heading] || []).map((opt) => ({
        label: opt,
        value: opt,
      }))
  );

  return (
    <div className="flex">
      <div className="w-[90%]">
        <Heading_Component ui="All" text={`Details for Listing`} />

        <Agent_client_loyers
          visible={dataMap.modelopen}
          index={id}
          agentData={dataMap.selectedRow}
          selectedSection={dataMap.selectedSection}
          arrayname="Listings"
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
          value={fined?.Listinginfo}
          heading={input_Heading.Listing_Heading.fieldHeadings}
          Array={input_Heading.Listing_Heading.fieldKeys}
          type={fieldTypes}
          options={fieldOptions}
          row="grid-cols-3"
          cols="col-span-3"
        />

        {Listing_Heading.map((section, idx) => (
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
                    <Icons.Cross />{" "}
                    {/* use delete icon instead of edit if desired */}
                  </button>
                )}
              </div>
            ))}
            Size={section.size}
            Button="Add"
            Heading={section.heading}
            onButtonClick={() => handleAdd(section.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing_Details;

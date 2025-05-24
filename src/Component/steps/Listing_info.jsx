import React, { useState } from "react";
import Multiple_input from "../input/multiple_input";
import Fileds from "../../Globel_Arrays/Fileds";
import { Create_Fileds } from "../../Globel_Arrays/Input_Heading";

const Listing_info = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const fieldTypes = Create_Fileds.Listinginfo_Heading.fieldKeys.map(
    (heading) =>
      Create_Fileds.Listinginfo_Heading.optionBasedFields.includes(heading)
        ? "options"
        : Create_Fileds.Listinginfo_Heading.dateFields.includes(heading)
        ? "date"
        : "text"
  );
  //conver to object
  const fieldOptions = Create_Fileds.Listinginfo_Heading.fieldHeadings.map(
    (heading) => {
      const opts = Create_Fileds.Listinginfo_Heading.options[heading] || [];

      return opts.map((o) => ({ label: o, value: o }));
    }
  );

  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-700">Listing</h1>

      <Multiple_input
        onchange={handleInputChange}
        value={data}
        heading={Create_Fileds.Listinginfo_Heading.fieldHeadings}
        Array={Create_Fileds.Listinginfo_Heading.fieldKeys}
        type={fieldTypes}
        options={fieldOptions}
        row="grid-cols-3"
        cols="col-span-3"
      />
    </div>
  );
};

export default Listing_info;

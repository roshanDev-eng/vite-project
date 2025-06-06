import React, { useState } from "react";
import Multiple_input from "../input/multiple_input";
import { Create_Fileds } from "../../Globel_Arrays/Input_Heading";

const Offer_info = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const fieldTypes = Create_Fileds.Offerinfo_Heading.fieldKeys.map((heading) =>
    Create_Fileds.Offerinfo_Heading.optionBasedFields.includes(heading)
      ? "options"
      : Create_Fileds.Offerinfo_Heading.dateFields.includes(heading)
      ? "date"
      : "text"
  );
  //conver to object
  const fieldOptions = Create_Fileds.Offerinfo_Heading.fieldKeys.map(
    (heading) => {
      const opts = Create_Fileds.Offerinfo_Heading.options[heading] || [];

      return opts.map((o) => ({ label: o, value: o }));
    }
  );

  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-700">Offer</h1>

      <Multiple_input
        onchange={handleInputChange}
        value={data}
        heading={Create_Fileds.Offerinfo_Heading.fieldHeadings}
        Array={Create_Fileds.Offerinfo_Heading.fieldKeys}
        type={fieldTypes}
        options={fieldOptions}
        row="grid-cols-2"
        cols="col-span-2"
      />
    </div>
  );
};

export default Offer_info;

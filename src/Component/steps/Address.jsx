import React from "react";
import Multiple_input from "../input/multiple_input";
import { Create_Fileds } from "../../Globel_Arrays/Input_Heading";

const Address = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const fieldTypes = Create_Fileds.Address_Heading.fieldHeadings.map(
    (heading) =>
      Create_Fileds.Address_Heading.optionBasedFields.includes(heading)
        ? "options"
        : "text"
  );
  //conver to object
  const fieldOptions = Create_Fileds.Address_Heading.fieldHeadings.map(
    (heading) => {
      const opts = Create_Fileds.Address_Heading.options[heading] || [];

      return opts.map((o) => ({ label: o, value: o }));
    }
  );

  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-700">Address</h1>
      <Multiple_input
        onchange={handleInputChange}
        value={data}
        heading={Create_Fileds.Address_Heading.fieldHeadings}
        Array={Create_Fileds.Address_Heading.fieldKeys}
        type={fieldTypes}
        options={fieldOptions}
        row="grid-cols-3"
        cols="col-span-3"
      />
    </div>
  );
};

export default Address;

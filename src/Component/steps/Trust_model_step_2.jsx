// Trust_model_step_2.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trust_Model } from "../../Globel_Arrays/Input_Heading";
import Multiple_input from "../input/multiple_input";
import { updateFormField } from "../../Redux_tolkit/Transaction/Transaction";

export const Trust_model_step_2 = ({ showAddDeposit }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.Transaction.formData);

  const buildPartInfo = (part) => {
    const { fieldKeys, fieldHeadings, optionBasedFields, dateFields, options } =
      part;

    const types = fieldKeys.map((heading) =>
      optionBasedFields.includes(heading)
        ? "options"
        : dateFields.includes(heading)
        ? "date"
        : "text"
    );

    const optionValues = fieldKeys.map((heading) => {
      const opts = options[heading] || [];
      return opts.map((o) => ({ label: o, value: o }));
    });

    return {
      fieldKeys,
      fieldHeadings,
      types,
      options: optionValues,
    };
  };

  const partData = {
    part1: buildPartInfo(Trust_Model.Trust_steps_2.part_1),
    part2: buildPartInfo(Trust_Model.Trust_steps_2.part_2),
    part3: buildPartInfo(Trust_Model.Trust_steps_2.part_3),
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    dispatch(updateFormField({ name, value }));

    if (name === "PRICE" || name === "QUANTITY") {
      const price = name === "PRICE" ? value : formData.PRICE;
      const quantity = name === "QUANTITY" ? value : formData.QUANTITY;

      const priceNum = parseFloat(price);
      const quantityNum = parseFloat(quantity);

      if (!isNaN(priceNum) && !isNaN(quantityNum)) {
        const subtotal = priceNum * quantityNum;
        dispatch(
          updateFormField({ name: "SUBTOTAL", value: subtotal.toFixed(2) })
        );
      }
    }
  };

  return (
    <div className="space-y-6">
      <Multiple_input
        onchange={handleInputChange}
        value={formData}
        heading={partData.part1.fieldHeadings}
        Array={partData.part1.fieldKeys}
        type={partData.part1.types}
        options={partData.part1.options}
        row="grid-cols-3"
        cols="col-span-3"
      />

      <div className="border-t border-gray-300 my-4"></div>

      <Multiple_input
        onchange={handleInputChange}
        value={formData}
        heading={partData.part2.fieldHeadings}
        Array={partData.part2.fieldKeys}
        type={partData.part2.types}
        options={partData.part2.options}
        row="grid-cols-3"
        cols="col-span-3"
      />

      <div className="border-t border-gray-300 my-4"></div>

      <Multiple_input
        onchange={handleInputChange}
        value={formData}
        heading={partData.part3.fieldHeadings}
        Array={partData.part3.fieldKeys}
        type={partData.part3.types}
        options={partData.part3.options}
        row="grid-cols-6"
        cols="col-span-3"
      />
    </div>
  );
};

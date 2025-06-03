import React, { useState } from "react";
import Multiple_input from "../input/multiple_input";
import { Invoice_update_model } from "../../Globel_Arrays/Input_Heading";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../Redux_tolkit/Transaction/Transaction";
import {
  getdispatchfunctios,
  getuseselectervalue,
} from "../../Pages/Files/Transaction/Transaction_components";
import Short_Components from "../Show_component/Show_component";
import Icons from "../Icons/Icons";
import Fileds from "../../Globel_Arrays/Fileds";
import { useParams } from "react-router-dom";

const Invoice_update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Transaction_show } = getuseselectervalue();
  const fineds = Transaction_show.find((data) => data.Transaction_id === id);
  const index = useSelector((state) => state.Transaction.updateid);
  const values = useSelector(
    (state) => state.Transaction.trustWithdrawalLedger[index]
  );
  const invoice_ledger = useSelector(
    (state) => state.Transaction.invoice_ledger
  );
  const [formData, setFormData] = useState(values || {});

  const agentOptions =
    fineds?.Agents?.map((a) => ({
      label: a.Name,
      value: a.agentId, // ✅ use unique ID
    })) || [];

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

    const defaultOpts = {
      [Fileds.Name.key]: agentOptions,
    };

    const optionValues = fieldKeys.map((heading) => {
      const opts = options[heading] || defaultOpts[heading] || [];
      return opts.map((o) => ({
        label: o.label ?? o.name ?? o,
        value: o.value ?? o.agentId ?? o,
      }));
    });

    return {
      fieldKeys,
      fieldHeadings,
      types,
      options: optionValues,
    };
  };

  const partData = {
    part1: buildPartInfo(Invoice_update_model.Trust_steps_2.part_1),
  };

  const objects = {
    STATEMENT: invoice_ledger.filter(
      (data) => data.RECEIPT === formData.RECEIPT
    ),
  };

  const { Invoiceupdate_Heading } = getdispatchfunctios(dispatch, objects);

  // ✅ Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === Fileds.Name.key) {
      const selectedAgent = agentOptions.find((a) => a.value === value);
      console.log(selectedAgent);
      if (selectedAgent) {
        setFormData((prev) => ({
          ...prev,
          [Fileds.Name.key]: selectedAgent.value,
        }));
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitDeposit = () => {
    dispatch(
      updateField({ arrayname: "trustWithdrawalLedger", updatedata: formData })
    );
    console.log("Submitted:", formData);
  };

  const handleAdd = (sectionKey) => {
    console.log("Add clicked for:", sectionKey);
  };

  const handleDeleteClick = (sectionKey, row, index) => {
    console.log("Delete clicked for:", sectionKey, row, index);
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
      <button
        onClick={handleSubmitDeposit}
        className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow"
      >
        ✅ Submit
      </button>

      <div className="border-t border-gray-300 my-4"></div>

      {Invoiceupdate_Heading.map((section, idx) => (
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
                  <Icons.edit />
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
  );
};

export default Invoice_update;

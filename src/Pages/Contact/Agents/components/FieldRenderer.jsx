import React from "react";

const FieldRenderer = ({ field, value, onChange, fullRow }) => {
  const isCheckbox = ["Per", "TRAN", "VAR"].includes(field.key);
  const isSelect = ["PRODUCT", "TYPE"].includes(field.key);
  const isText = ["MIN", "MAX", "VALUE"].includes(field.key);

  // Determine fee type message (only render once, not per checkbox)
  const showFeeTypeMessage = field.key === "VAR" && fullRow;
  let feeMessage = "";

  if (fullRow) {
    const { Per, TRAN, VAR } = fullRow;

    if (!Per && !TRAN && !VAR) {
      feeMessage = "Monthly Fee";
      console.log(feeMessage);
    } else if (TRAN) {
      feeMessage = "Transaction Fee";
    } else if (Per) {
      feeMessage = "Percentage";
    }
  }

  return (
    <div className="flex flex-col text-sm">
      {isCheckbox ? (
        <>
          <label className="mb-1 text-gray-500">{field.label}</label>
          <input
            type="checkbox"
            checked={!!value}
            onChange={() => onChange(!value)}
            className="w-4 h-4 accent-blue-600"
          />
          {showFeeTypeMessage && feeMessage && (
            <div className="mt-1 text-xs font-semibold text-green-600">
              {feeMessage}
            </div>
          )}
        </>
      ) : isText ? (
        <>
          <label className="mb-1 text-gray-500">{field.label}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder={field.label}
          />
        </>
      ) : isSelect ? (
        <>
          <label className="mb-1 text-gray-500">{field.label}</label>
          <select
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="border px-3 py-2 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select {field.label}</option>
            <option value="Monthly fee">Monthly fee</option>
            <option value="Transaction fee">Transaction fee</option>
          </select>
        </>
      ) : (
        <>
          <label className="mb-1 text-gray-500">{field.label}</label>
          <div className="text-gray-800 border px-3 py-2 rounded-md bg-gray-50">
            {value ?? "-"}
          </div>
        </>
      )}
    </div>
  );
};

export default FieldRenderer;

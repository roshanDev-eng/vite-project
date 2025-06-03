import React from "react";
import FieldRenderer from "./FieldRenderer";

const RowCard = ({
  cols,
  sectionKey,
  row,
  rowIndex,
  fields,
  handleCheckboxChange,
  handleInputChange,
  handleEditClick,
}) => {
  return (
    <div
      className={`bg-white mb-4 grid ${cols} gap-4 p-4 rounded-lg shadow-sm border border-gray-200 relative`}
    >
      {fields.map((field, i) => (
        <FieldRenderer
          key={i}
          field={field}
          value={row[field.key] ?? ""}
          onChange={(val) =>
            field.key === "Per" || field.key === "TRAN" || field.key === "VAR"
              ? handleCheckboxChange(sectionKey, rowIndex, field.key)
              : handleInputChange(sectionKey, rowIndex, field.key, val)
          }
        />
      ))}

      {/* <button
        onClick={() => handleEditClick(sectionKey, row, rowIndex)}
        className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1.5 rounded-md text-xs hover:bg-blue-600 transition"
      >
        Edit
      </button> */}
    </div>
  );
};

export default RowCard;

import React from "react";

const EditModal = ({ title, fields, data, setData, onSave, onClose }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] space-y-4">
        <h2 className="text-xl font-bold">{title || "Edit Item"}</h2>

        {fields.map((field, idx) => (
          <input
            key={idx}
            name={field.key}
            value={data[field.key] || ""}
            onChange={handleChange}
            placeholder={field.label}
            className="w-full border p-2 rounded"
          />
        ))}

        <div className="flex justify-end space-x-2 pt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

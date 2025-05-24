import React from "react";

const SingleInputFileds = ({
  id,
  type,
  Heading,
  checked,
  value,
  onchange,
  options,
  name,
}) => {
  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500";

  const renderInputField = () => {
    switch (type) {
      case "Line":
        return (
          <div className="grid col-span-2 border-b border-gray-300 mb-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></div>
        );
      case "show":
        return (
          <div>
            <div className="ml-1 text-gray-800">{Heading}</div>
            <div className={inputClass}>{value}</div>
          </div>
        );
      case "text":
        return (
          <div>
            <div className="ml-1 text-gray-800">{Heading}</div>
            <input
              id={id}
              type={type}
              name={name}
              value={value || ""}
              onChange={onchange}
              className={inputClass}
            />
          </div>
        );
      case "date":
        return (
          <div>
            <div className="ml-1 text-gray-800">{Heading}</div>
            <input
              id={id}
              type={type}
              name={name}
              value={value || ""}
              onChange={onchange}
              className={inputClass}
            />
          </div>
        );
      case "checkbox":
        return (
          <div className="flex items-center justify-center">
            <div className="ml-1 w-32 text-gray-800">{Heading}</div>
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={onchange}
              className={inputClass}
            />
          </div>
        );
      case "options":
        return (
          <div>
            <div className="ml-1 text-gray-800">{Heading}</div>
            <select
              id={id}
              name={name}
              value={value || ""}
              onChange={onchange}
              className={inputClass}
            >
              <option value="Option 1">Select an option</option>
              {options?.map((option, index) => (
                <option key={option.value || index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderInputField()}</>;
};

export default SingleInputFileds;

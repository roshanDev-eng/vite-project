// ../Heading/Genral_Main_Heading.jsx

import React from "react";

const Genral_Main_Heading = ({
  Heading,
  size,
  Bcss,
  button,
  onButtonClick,
}) => {
  return (
    <div className={`flex justify-between items-center mb-2 ${Bcss ?? ""}`}>
      <h2 className={`text-${size ?? "lg"} font-semibold`}>{Heading}</h2>

      {button && (
        <button
          onClick={onButtonClick}
          className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
        >
          {button}
        </button>
      )}
    </div>
  );
};

export default Genral_Main_Heading;

import React from "react";
import Genral_Main_Heading from "../Heading/Genral_Main_Heading";

const Short_Components = ({
  Array_H,
  Array_V,
  Cols,
  Button,
  Heading,
  Size,
  Bcss,
  onButtonClick, // ✅ new prop
}) => {
  return (
    <div className="mt-5">
      <div className="bg-gray-200 rounded-sm border border-gray-300 p-3">
        <Genral_Main_Heading
          button={Button}
          onButtonClick={onButtonClick} // ✅ pass it down
          Bcss={Bcss}
          Heading={Heading}
          size={Size}
        />
        <div className={`p-2 grid ${Cols}`}>
          {Array_H.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
        {Array_V}
      </div>
    </div>
  );
};

export default Short_Components;

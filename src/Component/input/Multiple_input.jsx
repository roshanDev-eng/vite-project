import React from "react";
import SingleInputFileds from "./Single_input";

const Multiple_input = ({
  checked,
  Array,
  value,
  options,
  onchange,
  row,
  cols,
  css,
  button,
  heading,
  type,
  Submit,
}) => {
  return (
    <>
      <div className={`grid ${row} ${cols} mt-5 gap-x-4`}>
        {Array.map((index, idx) => {
          return (
            <SingleInputFileds
              checked={checked}
              row={row}
              key={idx} // Ideally, use a unique key if available
              options={options[idx]}
              type={type[idx]}
              name={index}
              value={value[index]}
              onchange={onchange}
              Heading={heading[idx]}
            />
          );
        })}
      </div>
      <button onClick={Submit} className={`mt-10 mb-5 ${css}`}>
        {button}
      </button>
    </>
  );
};

// Multiple_input.defaultProps = {
//   checked: false,
//   css: "",
//   button: "Submit", // Default button text
//   Submit: () => {}, // Default submit function (empty)
// };

export default Multiple_input;

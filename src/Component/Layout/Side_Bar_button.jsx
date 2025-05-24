import React from "react";

const Side_Bar_button = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white px-4 py-2 text-center rounded-lg w-full min-h-[45px] h-auto border shadow-sm flex justify-center items-center ${
        disabled ? "bg-gray-300 cursor-not-allowed" : "hover:bg-slate-300"
      }`}
    >
      {text}
    </button>
  );
};

export default Side_Bar_button;

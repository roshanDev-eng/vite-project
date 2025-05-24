import React from "react";
import { Link } from "react-router-dom";

const Arrwo_button = ({ Links, text }) => {
  return (
    <Link
      to={Links}
      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
    >
      {text}
    </Link>
  );
};

export default Arrwo_button;

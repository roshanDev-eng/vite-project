import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Agent_Selected from "../steps/Agent_Selected";
import { add_Agent_Client_Loywer } from "../../Redux_tolkit/Listing/Listing_Offer_array";
import Client_Selected from "../steps/Client_Selected";
import Loywer_Selected from "../steps/Loywer_Selected";
import { getdispatchfunctios } from "../../Pages/Files/Transaction/Transaction_components";

const Invoice = ({
  visible,
  index, // Listing_id
  agentData,
  selectedSection,
  arrayname,
  onClose,
}) => {
  const dispatch = useDispatch();
  if (!visible) return null;
  const { buttonList } = getdispatchfunctios(dispatch);
  const handleSubmit = () => {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        Trust
        <div className="flex justify-end pt-4 space-x-2">
          <button
            onClick={buttonList[0].offClick}
            className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getdispatchfunctios,
  getuseselectervalue,
} from "../../Pages/Files/Transaction/Transaction_components";
import SingleInputFileds from "../input/Single_input";

const Trust_Model = ({
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
  const { Trust_Counter } = getuseselectervalue();
  const handleSubmit = () => {};
  console.log(Trust_Counter);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] h-[200px] overflow-auto">
        <div className="flex p-1 gap-2 grid-flow-col grid-cols-3">
          <SingleInputFileds Heading={"hello"} type={"text"} />
          <SingleInputFileds Heading={"hello"} type={"text"} />
          <SingleInputFileds Heading={"hello"} type={"text"} />
          <SingleInputFileds Heading={"hello"} type={"text"} />
          <SingleInputFileds Heading={"hello"} type={"text"} />
          <SingleInputFileds Heading={"hello"} type={"text"} />
        </div>

        <div className="flex justify-end pt-4 space-x-2">
          {Trust_Counter > 1 && (
            <button onClick={buttonList[0].pre} className="btn btn-secondary">
              Back
            </button>
          )}
          {Trust_Counter < 4 && (
            <button onClick={buttonList[0].next} className="btn btn-primary">
              Next
            </button>
          )}
          {Trust_Counter === 4 && (
            <button onClick={handleSubmit} className="btn btn-success">
              Submit
            </button>
          )}
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

export default Trust_Model;

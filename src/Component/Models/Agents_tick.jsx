import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getdispatchfunctios,
  getuseselectervalue,
} from "../../Pages/Files/Transaction/Transaction_components";
import Agent_Selected from "../steps/Agent_Selected";
import { Trust_model_step_2 } from "../steps/Trust_model_step_2";

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

  const yourAgentsArray = [
    {
      _id: "124",
      FIRST_NAME: "Johnvvv",
      LASTNAME: "Doe",
      GMAIL: "john@example.com",
      CITY: "Toronto",
    },
    {
      _id: "456",
      FIRST_NAME: "Janeeee",
      LASTNAME: "Smith",
      GMAIL: "jane@example.com",
      CITY: "Vancouver",
    },
  ];
  const updateStepData = (stepKey, data) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: data,
    }));
  };
  const [formData, setFormData] = useState({
    Agents: [], // ← NEW
    Clients: [], // ← NEW
  });
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-3xl bg-gray-100 text-gray-800 rounded-2xl shadow-2xl border border-gray-300 overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-200 flex-shrink-0">
          <h2 className="text-lg font-semibold tracking-wider uppercase text-gray-700">
            Step {Trust_Counter} of 2
          </h2>
          <button
            onClick={buttonList[0].offClick}
            className="text-2xl text-gray-600 hover:text-red-500 transition-transform duration-150 transform hover:scale-125"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto flex-grow">
          {Trust_Counter === 2 && (
            <>
              <Trust_model_step_2 />
            </>
          )}
          {Trust_Counter === 1 && (
            <>
              <Agent_Selected
                agentsList={yourAgentsArray} // pass the agents array from backend/mock
                data={formData.Agents}
                onChange={(data) => updateStepData("Agents", data)}
              />
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-300 bg-white flex-shrink-0">
          <div className="text-sm text-gray-500">Step {Trust_Counter} / 4</div>
          <div className="flex space-x-3">
            {Trust_Counter > 1 && (
              <button
                onClick={buttonList[0].pre}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-black shadow"
              >
                ← Back
              </button>
            )}
            {Trust_Counter < 2 && (
              <button
                onClick={buttonList[0].next}
                className="px-4 py-2 rounded-lg bg-white border text-black font-medium hover:bg-gray-100 transition"
              >
                Next →
              </button>
            )}
            {Trust_Counter === 2 && (
              <button
                onClick={"handleInputChange"}
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow"
              >
                ✅ Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust_Model;

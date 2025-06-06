// Trust_Model.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDeposit,
  Handelmodel,
} from "../../Redux_tolkit/Transaction/Transaction";
import {
  getdispatchfunctios,
  getuseselectervalue,
} from "../../Pages/Files/Transaction/Transaction_components";
import Agent_Selected from "../steps/Agent_Selected";
import { Trust_model_step_2 } from "../steps/Trust_model_step_2";

const Trust_Model = ({ visible, id, agents }) => {
  const dispatch = useDispatch();
  const { buttonList } = getdispatchfunctios(dispatch);
  const { Trust_Counter } = getuseselectervalue();
  const formData = useSelector((state) => state.Transaction.formData);
  const [formDataLocal, setFormData] = useState({ Agents: [], Clients: [] });

  if (!visible) return null;

  const updateStepData = (stepKey, data) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: data,
    }));
  };
  console.log(formDataLocal);
  const handleSubmitDeposit = () => {
    const selectedAgent = formDataLocal.Agents[0];
    const name = selectedAgent?.Name ?? "";
    const agent_id = selectedAgent?.agentId ?? "";
    const date = formData?.DATE;
    const balance = parseFloat(formData?.SUBTOTAL ?? 0);

    dispatch(addDeposit({ name, agent_id, transaction_id: id, date, balance }));
    dispatch(
      Handelmodel({
        off: false,
        editName: "Trust_model_On_off",
        counter: "reset",
      })
    );
  };

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-3xl bg-gray-100 text-gray-800 rounded-2xl shadow-2xl border border-gray-300 overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
          <h2 className="text-lg font-semibold uppercase text-gray-700">
            Step {Trust_Counter} of 2
          </h2>
          <button
            onClick={buttonList[0].offClick}
            className="text-2xl text-gray-600 hover:text-red-500 hover:scale-125"
          >
            &times;
          </button>
        </div>

        <div className="px-6 py-5 overflow-y-auto flex-grow">
          {Trust_Counter === 2 && <Trust_model_step_2 />}
          {Trust_Counter === 1 && (
            <Agent_Selected
              agentsList={agents}
              data={formDataLocal.Agents}
              onChange={(data) => updateStepData("Agents", data)}
            />
          )}
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t bg-white">
          <div className="text-sm text-gray-500">Step {Trust_Counter} / 2</div>
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
                className="px-4 py-2 rounded-lg bg-white border text-black hover:bg-gray-100"
              >
                Next →
              </button>
            )}
            {Trust_Counter === 2 && (
              <button
                onClick={handleSubmitDeposit}
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

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getdispatchfunctios,
  getuseselectervalue,
} from "../../Pages/Files/Transaction/Transaction_components";
import { withdrawAmount } from "../../Redux_tolkit/Transaction/Transaction";
import { useParams } from "react-router-dom";

const InvoiceModal = ({ visible, onClose, data, agents }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedIds, setSelectedIds] = useState([]);
  const { buttonList } = getdispatchfunctios(dispatch);
  const { Transaction_show } = getuseselectervalue();

  const transactionData = Transaction_show.find(
    (data) => data.Transaction_id === id
  );
  console.log();
  if (!visible) return null;

  const toggleSelect = (Agent_id) => {
    setSelectedIds((prev) =>
      prev.includes(Agent_id)
        ? prev.filter((sid) => sid !== Agent_id)
        : [...prev, Agent_id]
    );
  };
  const selectedAgents = agents.filter((agent) =>
    selectedIds.includes(agent.Agent_id)
  );

  const handleGenerate = () => {
    selectedAgents.forEach((agent) => {
      dispatch(
        withdrawAmount({
          Trustinclud: transactionData?.Offer_info?.["Trust Include"] || "No",
          transaction_id: id,
          agentId: agent.Agent_id, // or agent.agentId, based on your structure
          name: agent.Name,
          amount: data.Offer_info.OFFER_PRICE, // use a dynamic amount if needed
        })
      );
    });
    console.log("Selected Agents:", selectedAgents);
    // your logic here
  };

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fadeIn">
      <div className="bg-gray-100 rounded-2xl shadow-2xl border border-gray-300 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-200 border-b border-gray-300">
          <h2 className="text-xl font-semibold tracking-wide text-gray-700">
            Invoice
          </h2>
          <button
            onClick={buttonList[1].offClick}
            className="text-2xl text-gray-600 hover:text-red-600 transition-transform transform hover:scale-125"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow overflow-y-auto px-6 py-5 space-y-6">
          {/* Section Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Who Do You Want To Invoice?
            </h3>
            <button
              onClick={handleGenerate}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition"
            >
              Generate
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_40px] gap-4 text-gray-700 font-semibold border-b border-gray-300 pb-2">
            <div>First Name</div>
            <div>Last Name</div>
            <div>City</div>
            <div>Province</div>
            <div></div>
          </div>

          {/* Agent Rows */}
          <div className="space-y-2">
            {agents && agents.length > 0 ? (
              agents.map((agent) => {
                const isSelected = selectedIds.includes(agent.Agent_id);
                return (
                  <div
                    key={agent.id}
                    className={`grid grid-cols-[1fr_1fr_1fr_1fr_40px] gap-4 items-center px-4 py-3 rounded-lg border border-transparent transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-blue-100 border-blue-300 shadow"
                        : "hover:bg-blue-50 hover:border-blue-200"
                    }`}
                    onClick={() => toggleSelect(agent.Agent_id)}
                  >
                    <div>{agent.firstName}</div>
                    <div>{agent.Name}</div>
                    <div>{agent.CITY}</div>
                    <div>{agent.Province}</div>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(agent.Agent_id)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">No agents found.</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-start items-center px-6 py-4 border-t border-gray-300 bg-white">
          <button
            onClick={buttonList[1].offClick}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;

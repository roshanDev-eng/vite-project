import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addAgent } from "../../../Redux_tolkit/Agent/agentSlice";
import Fileds from "../../../Globel_Arrays/Fileds";

const Clients_Show = () => {
  const agents = useSelector((state) => state.agents.agents);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAgent, setNewAgent] = useState({
    name: "",
    email: "",
    [Fileds.Address.key]: "",
    code: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setNewAgent({
      name: "",
      email: "",
      [Fileds.Address.key]: "",
      [Fileds.Code.key]: "",
    });
  };

  const handleAddAgent = () => {
    const id = Date.now().toString(); // unique ID
    const [firstName, lastName = ""] = newAgent.name.split(" ");

    dispatch(
      addAgent({
        Agent_id: id,
        [Fileds.Name.key]: firstName,
        LASTNAME: lastName,
        GMAIL: newAgent.email,
        CITY: "N/A",
        [Fileds.Address.key]: newAgent[Fileds.Address.key],
        [Fileds.Code.key]: newAgent[Fileds.Code.key],
      })
    );

    toggleModal();
  };

  const filteredAgents = agents.filter(
    (agent) =>
      `${agent.FIRST_NAME} ${agent.LASTNAME}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      agent.GMAIL.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent[Fileds.Address.key].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agent Portal</h1>
          <p className="text-sm text-gray-500">Manage your agents easily.</p>
        </div>

        <button
          onClick={toggleModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          + Add Agent
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email or address..."
          className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Code</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <tr key={agent._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{agent._id}</td>
                  <td className="px-6 py-4">
                    {agent[Fileds.Name.key]} {agent.LASTNAME}
                  </td>
                  <td className="px-6 py-4">{agent.GMAIL}</td>
                  <td className="px-6 py-4">{agent[Fileds.Address.key]}</td>
                  <td className="px-6 py-4">{agent[Fileds.Code.key]}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`details/${agent.Agent_id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No agents found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Add New Agent</h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={newAgent.name}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, name: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={newAgent.email}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, email: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Address"
                value={newAgent[Fileds.Address.key]}
                onChange={(e) =>
                  setNewAgent({
                    ...newAgent,
                    [Fileds.Address.key]: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder={Fileds.Code.key}
                value={newAgent[Fileds.Code.key]}
                onChange={(e) =>
                  setNewAgent({
                    ...newAgent,
                    [Fileds.Code.key]: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={toggleModal}
                className="px-4 py-2 border rounded text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAgent}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients_Show;

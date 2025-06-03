import React, { useMemo, useState } from "react";
import Fileds from "../../Globel_Arrays/Fileds";

const Agent_Selected = ({ agentsList, data, onChange }) => {
  const [search, setSearch] = useState("");

  // Filter agents based on search text
  const filteredAgents = useMemo(() => {
    return agentsList.filter((a) =>
      `${a[Fileds.Name.key]} ${a.LASTNAME}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, agentsList]);

  // Select an agent and add to data list
  const handleSelectAgent = (agent) => {
    console.log(agent);
    const exists = data.find((a) => a.agentId === agent.Agent_id);
    if (!exists) {
      const updated = [
        ...data,
        {
          agentId: agent.Agent_id,
          [Fileds.Name.key]: `${agent[Fileds.Name.key]} ${agent.LASTNAME}`,
          [Fileds.Type.key]: "Seller", // ✅ lowercased
          [Fileds.Commission.key]: "20", // ✅ lowercased
          [Fileds.Iscommission.key]: "yes", // ✅ lowercased
        },
      ];
      onChange(updated);
    }
    setSearch("");
  };

  // Update agent type or commission dynamically
  const updateType = ({ agentId, ...rest }) => {
    const updated = data.map((a) =>
      a.agentId === agentId ? { ...a, ...rest } : a
    );
    console.log(updated);
    onChange(updated);
  };

  // Remove agent from selected list
  const removeAgent = (agentId) => {
    const updated = data.filter((a) => a.agentId !== agentId);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select Agents</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search agents..."
        className="border px-3 py-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtered agent list */}
      {search && (
        <ul className="bg-white shadow rounded p-2 mt-2 space-y-2 max-h-40 overflow-y-auto">
          {filteredAgents.map((agent) => (
            <li
              key={agent.Agent_id}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => handleSelectAgent(agent)}
            >
              {agent[Fileds.Name.key]} {agent.LASTNAME} ({agent.GMAIL})
            </li>
          ))}
        </ul>
      )}

      {/* Selected agent display */}
      {data.length > 0 && (
        <div className="space-y-2">
          {data.map((agent) => (
            <div
              key={agent.agentId}
              className="flex items-start justify-between p-3 border rounded"
            >
              <div className="w-full space-y-1">
                <p className="font-medium">{agent[Fileds.Name.key]}</p>

                {/* Commission input */}
                <label className="block text-sm font-medium">
                  Commission (%)
                </label>
                <input
                  type="number"
                  className="border px-3 py-1 rounded w-full"
                  value={agent[Fileds.Commission.key]}
                  onChange={(e) =>
                    updateType({
                      agentId: agent.agentId,
                      [Fileds.Commission.key]: e.target.value,
                    })
                  }
                />

                {/* Agent type dropdown */}
                <label className="block text-sm font-medium mt-2">
                  Agent Type
                </label>
                <select
                  value={agent.type}
                  onChange={(e) =>
                    updateType({
                      agentId: agent.agentId,
                      type: e.target.value,
                    })
                  }
                  className="border px-2 py-1 rounded w-full"
                >
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeAgent(agent.agentId)}
                className="text-red-500 font-bold ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Agent_Selected;

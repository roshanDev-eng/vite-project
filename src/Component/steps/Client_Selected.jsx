import React, { useMemo, useState } from "react";
import Fileds from "../../Globel_Arrays/Fileds";

const Client_Selected = ({ ClientsList, data, onChange }) => {
  console.log(data, onChange);
  const [search, setSearch] = useState("");

  const filteredClients = useMemo(() => {
    return ClientsList.filter((a) =>
      `${a.FIRST_NAME} ${a.LASTNAME}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, ClientsList]);

  const handleSelectClient = (Client) => {
    const exists = data.find((a) => a.ClientId === Client._id);
    if (!exists) {
      const updated = [
        ...data,
        {
          ClientId: Client._id,
          [Fileds.Name.label]: `${Client.FIRST_NAME} ${Client.LASTNAME}`,
          [Fileds.Type.label]: "Seller", // default
        },
      ];
      onChange(updated);
    }
    setSearch("");
  };

  const updateType = (ClientId, Type) => {
    const updated = data.map((a) =>
      a.ClientId === ClientId ? { ...a, Type } : a
    );
    onChange(updated);
  };

  const removeClient = (ClientId) => {
    const updated = data.filter((a) => a.ClientId !== ClientId);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select Clients</h2>
      <input
        type="text"
        placeholder="Search Clients..."
        className="border px-3 py-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <ul className="bg-white shadow rounded p-2 mt-2 space-y-2 max-h-40 overflow-y-auto">
          {filteredClients.map((Client) => (
            <li
              key={Client._id}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => handleSelectClient(Client)}
            >
              {Client.FIRST_NAME} {Client.LASTNAME} ({Client.GMAIL})
            </li>
          ))}
        </ul>
      )}

      {data.length > 0 && (
        <div className="space-y-2">
          {data.map((Client) => (
            <div
              key={Client.ClientId}
              className="flex items-center justify-between p-3 border rounded"
            >
              <div>
                <p className="font-medium">{Client[Fileds.Name.label]}</p>
                <select
                  value={Client[Fileds.Type.label]}
                  onChange={(e) => updateType(Client.ClientId, e.target.value)}
                  className="mt-1 border px-2 py-1 rounded"
                >
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </div>
              <button
                onClick={() => removeClient(Client.ClientId)}
                className="text-red-500 font-bold"
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

export default Client_Selected;

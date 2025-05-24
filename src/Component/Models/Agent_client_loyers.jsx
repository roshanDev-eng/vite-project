import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Agent_Selected from "../steps/Agent_Selected";
import { add_Agent_Client_Loywer } from "../../Redux_tolkit/Listing/Listing_Offer_array";
import Client_Selected from "../steps/Client_Selected";
import Loywer_Selected from "../steps/Loywer_Selected";

const Agent_client_loyers = ({
  visible,
  index, // Listing_id
  agentData,
  selectedSection,
  arrayname,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Agents: [],
    Clients: [],
    Loyers: [],
  });
  useEffect(() => {
    if (agentData) {
      setFormData((prev) => ({
        ...prev,
        [selectedSection]: agentData,
      }));
    }
  }, [agentData, selectedSection]);

  if (!visible) return null;

  const updateStepData = (key, data) => {
    setFormData((prev) => ({
      ...prev,
      [key]: data,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      add_Agent_Client_Loywer({
        id: index,
        object_name: selectedSection,
        data: formData[selectedSection],
        arrayname,
      })
    );
    setFormData({ Agents: [], Clients: [] });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        {selectedSection === "Agents" && (
          <>
            <Agent_Selected
              onChange={(data) => updateStepData(selectedSection, data)}
              agentsList={[
                {
                  _id: "a1",
                  FIRST_NAME: "John",
                  LASTNAME: "Smith",
                  GMAIL: "aaaa",
                },
                {
                  _id: "c1",
                  FIRST_NAME: "Alice",
                  LASTNAME: "Doe",
                  GMAIL: "aaabbbbba",
                },
              ]}
              data={formData[selectedSection]}
            />
          </>
        )}
        {selectedSection === "Clients" && (
          <>
            <Client_Selected
              data={formData.Clients}
              ClientsList={[
                {
                  _id: "a1",
                  FIRST_NAME: "John",
                  LASTNAME: "Smith",
                  GMAIL: "aaaa",
                },
                {
                  _id: "c1",
                  FIRST_NAME: "Alice",
                  LASTNAME: "Doe",
                  GMAIL: "aaabbbbba",
                },
              ]}
              onChange={(data) => updateStepData(selectedSection, data)}
            />
          </>
        )}
        {selectedSection === "Loyers" && (
          <>
            <Loywer_Selected
              data={formData.Loyers}
              ClientsList={[
                {
                  _id: "a1",
                  FIRST_NAME: "John",
                  LASTNAME: "Smith",
                  GMAIL: "aaaa",
                },
                {
                  _id: "c1",
                  FIRST_NAME: "Alice",
                  LASTNAME: "Doe",
                  GMAIL: "aaabbbbba",
                },
              ]}
              onChange={(data) => updateStepData(selectedSection, data)}
            />
          </>
        )}
        <div className="flex justify-end pt-4 space-x-2">
          <button
            onClick={onClose}
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

export default Agent_client_loyers;

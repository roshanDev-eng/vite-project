import React, { useState } from "react";
import Listing_info from "../../../Component/steps/Listing_info";
import Address from "../../../Component/steps/Address";
import Agent_Selected from "../../../Component/steps/Agent_Selected";
import Client_Selected from "../../../Component/steps/Client_Selected";
import { Create_Fileds } from "../../../Globel_Arrays/Input_Heading";
import { addListing } from "../../../Redux_tolkit/Listing/Listing_Offer_array";
import { useDispatch, useSelector } from "react-redux";

const Multiple_steps = () => {
  const agents = useSelector((state) => state.agents.agents);
  console.log(agents);
  const yourClientsArray = [
    {
      _id: "123",
      FIRST_NAME: "John",
      LASTNAME: "Doe",
      GMAIL: "john@example.com",
      CITY: "Toronto",
    },
    {
      _id: "456",
      FIRST_NAME: "Jane",
      LASTNAME: "Smith",
      GMAIL: "jane@example.com",
      CITY: "Vancouver",
    },
  ];
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    address: Create_Fileds.Address_Heading.objects,
    Listinginfo: Create_Fileds.Listinginfo_Heading.objects,
    Agents: [], // ← NEW
    Clients: [], // ← NEW
  });
  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);
  const updateStepData = (stepKey, data) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: data,
    }));
    console.log("Agents", data);
  };
  const handleSubmit = () => {
    dispatch(addListing({ formData }));
    setCurrentStep(1);
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Listing Creation</h2>
      {currentStep === 1 && (
        <Listing_info
          data={formData.Listinginfo}
          onChange={(data) => updateStepData("Listinginfo", data)}
        />
      )}
      {currentStep === 2 && (
        <>
          <Address
            data={formData.address}
            onChange={(data) => updateStepData("address", data)}
          />
        </>
      )}
      {currentStep === 3 && (
        <>
          <Agent_Selected
            agentsList={agents} // pass the agents array from backend/mock
            data={formData.Agents}
            onChange={(data) => updateStepData("Agents", data)}
          />
        </>
      )}
      {currentStep === 4 && (
        <>
          <Client_Selected
            ClientsList={yourClientsArray} // pass the Clients array from backend/mock
            data={formData.Clients}
            onChange={(data) => updateStepData("Clients", data)}
          />
        </>
      )}

      <div className="flex gap-4">
        {currentStep > 1 && (
          <button onClick={handlePrevStep} className="btn btn-secondary">
            Back
          </button>
        )}
        {currentStep < 4 && (
          <button onClick={handleNextStep} className="btn btn-primary">
            Next
          </button>
        )}
        {currentStep === 4 && (
          <button onClick={handleSubmit} className="btn btn-success">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Multiple_steps;

import React, { useState } from "react";
import Listing_info from "../../../Component/steps/Listing_info";
import Address from "../../../Component/steps/Address";
import Agent_Selected from "../../../Component/steps/Agent_Selected";
import Client_Selected from "../../../Component/steps/Client_Selected";
import { Create_Fileds } from "../../../Globel_Arrays/Input_Heading";
import Offer_info from "../../../Component/steps/Offer_info";
import { useDispatch } from "react-redux";
import { addOffer } from "../../../Redux_tolkit/Listing/Listing_Offer_array";

const Multiple_steps_Offer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    Address: Create_Fileds.Address_Heading.objects,
    Offer_info: Create_Fileds.Offerinfo_Heading.objects,
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
    console.log(data);
  };

  const handleSubmit = () => {
    dispatch(addOffer({ formData, listingid: "" }));
    setCurrentStep(1);
    // post to backend or trigger logic here
  };
  const yourAgentsArray = [
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
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Offer Creation</h2>

      {currentStep === 1 && (
        <Offer_info
          data={formData.Offer_info}
          onChange={(data) => updateStepData("Offer_info", data)}
        />
      )}
      {currentStep === 2 && (
        <>
          <Address
            data={formData.Address}
            onChange={(data) => updateStepData("Address", data)}
          />
        </>
      )}
      {currentStep === 3 && (
        <>
          <Agent_Selected
            agentsList={yourAgentsArray} // pass the agents array from backend/mock
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

export default Multiple_steps_Offer;

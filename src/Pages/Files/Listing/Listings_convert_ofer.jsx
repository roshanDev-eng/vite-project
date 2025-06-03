import React, { useState } from "react";
import Agent_Selected from "../../../Component/steps/Agent_Selected";
import Client_Selected from "../../../Component/steps/Client_Selected";
import { Create_Fileds } from "../../../Globel_Arrays/Input_Heading";
import { convert_to } from "../../../Redux_tolkit/Listing/Listing_Offer_array";
import { useDispatch, useSelector } from "react-redux";
import Offer_info from "../../../Component/steps/Offer_info";
import { useParams } from "react-router-dom";

export const Listings_convert_ofer = () => {
  const { id } = useParams();
  const agents = useSelector((state) => state.agents.agents);
  const yourClientsArray = [
    {
      _id: "124",
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
  const combined = useSelector((state) => state.All.combined);
  const Listing_Offer = combined.find((item) => item.Listing_id === id);
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
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
    dispatch(convert_to({ Offerdata: formData, listingid: id }));
    setCurrentStep(1);
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Listing Convert to offer</h2>
      {currentStep === 1 && (
        <Offer_info
          data={formData.Offer_info}
          onChange={(data) => updateStepData("Offer_info", data)}
        />
      )}
      {currentStep === 2 && (
        <>
          <Agent_Selected
            agentsList={agents} // pass the agents array from backend/mock
            data={formData.Agents}
            onChange={(data) => updateStepData("Agents", data)}
          />
        </>
      )}
      {currentStep === 3 && (
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
        {currentStep < 3 && (
          <button onClick={handleNextStep} className="btn btn-primary">
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button onClick={handleSubmit} className="btn btn-success">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

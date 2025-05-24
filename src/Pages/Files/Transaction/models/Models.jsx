import React, { useState } from "react";
import { Trust } from "./Trust";
import Side_Bar_button from "../../../../Component/Layout/Side_Bar_button";
import Trust_Model from "../../../../Component/Models/Trust_Model";
import { getuseselectervalue } from "../Transaction_components";

export const Models = ({ arrays }) => {
  const { Trust_model_on_off } = getuseselectervalue();
  return (
    <div className="flex flex-col gap-3 w-[15%] p-10">
      <Trust_Model visible={Trust_model_on_off} />
      {arrays.map((btn, index) => (
        <Side_Bar_button key={index} text={btn.text} onClick={btn.onClickon} />
      ))}
    </div>
  );
};

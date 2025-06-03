import { useSelector } from "react-redux";
import Side_Bar_button from "../../../../Component/Layout/Side_Bar_button";
import Invoice_manual from "../../../../Component/Models/Invoice_manual";
import Invoice_Model from "../../../../Component/Models/Invoice_Model";
import Statement_manual from "../../../../Component/Models/Statement_manual";
import Statement_model from "../../../../Component/Models/statement_model";
import Trust_Model from "../../../../Component/Models/Trust_Model";
import { getuseselectervalue } from "../Transaction_components";
import Invoice_update_Model from "../../../../Component/Models/Invoice_update_Model";
import Statement_Update_Model from "../../../../Component/Models/Statement_Update_Model";

export const Models = ({ arrays, id }) => {
  const {
    Statement_Model_update_on_off,
    Invoice_Model_update_on_off,
    Invoice_manual_model,
    Statement_manual_model,
    Trust_model_on_off,
    Invoice_model,
    Statement_model_Button,
    Transaction_show,
  } = getuseselectervalue();

  const fineds = Transaction_show.find((data) => data.Transaction_id === id);

  const agents = useSelector((state) => state.agents.agents);

  const text = agents.filter(
    (data, index) => fineds?.Agents?.[index]?.agentId === data.Agent_id
  );
  return (
    <div className="flex flex-col gap-3 w-[15%] p-10">
      <Trust_Model visible={Trust_model_on_off} id={id} agents={agents || []} />

      <Invoice_Model
        visible={Invoice_model}
        onClose={() => {}} // ← Fix: just pass a dummy function if unused
        agents={text || []}
        data={fineds}
      />

      <Statement_model
        agents={text || []}
        visible={Statement_model_Button}
        onClose={() => {}} // ← same fix
        data={fineds}
      />

      <Statement_manual visible={Statement_manual_model} />
      <Invoice_update_Model visible={Invoice_Model_update_on_off} />
      <Statement_Update_Model visible={Statement_Model_update_on_off} />
      <Invoice_manual visible={Invoice_manual_model} />

      {arrays.map((btn, index) => (
        <Side_Bar_button key={index} text={btn.text} onClick={btn.onClickon} />
      ))}
    </div>
  );
};

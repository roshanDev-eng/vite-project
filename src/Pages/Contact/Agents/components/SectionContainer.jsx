import Short_Components from "../../../../Component/Show_component/Show_component";
import RowCard from "./RowCard";
import { useDispatch, useSelector } from "react-redux";
import { Undateid } from "../../../../Redux_tolkit/Transaction/Transaction";
import {
  INVOICESAGENT,
  INVOICINGPROFILE,
  updateInvoiceCheckvalue,
  updateInvoiceProfileCheckbox,
} from "../../../../Redux_tolkit/Agent/agentSlice";

const SectionContainer = ({ section, id, monthlyfee, data }) => {
  const dispatch = useDispatch();
  const handleCheckboxChange = (sectionKey, rowIndex, key) => {
    dispatch(updateInvoiceProfileCheckbox({ sectionKey, rowIndex, key, id }));
  };

  const handleInputChange = (sectionKey, rowIndex, key, value) => {
    dispatch(
      updateInvoiceCheckvalue({
        id: id,
        sectionKey,
        rowIndex,
        key,
        value,
      })
    );
  };

  const handleAdd = ({ block }) => {
    const newRow = {
      id: id,
      PRODUCT: "Click",
      VALUE: "50000",
      Per: false,
      TRAN: true,
      VAR: false,
      MIN: "50000",
      MAX: "2025-04-15",
      TYPE: "",
    };
    if (block.key === "INVOICESAGENT") {
      dispatch(INVOICESAGENT({ id: id, monthlyfee: monthlyfee }));
    } else if (block.key === "InvoicingProfile") {
      dispatch(INVOICINGPROFILE({ newrows: newRow }));
    }
  };

  const handleEditClick = (sectionKey, rowData, rowIndex) => {
    console.log("Edit Clicked:", sectionKey, rowData, rowIndex);
  };

  return (
    <Short_Components
      Cols={section.cols}
      Array_H={section.fields.map((f) => f.label)}
      Array_V={(data[section.key] || []).map((row, i) => (
        <RowCard
          key={i}
          cols={section.cols}
          sectionKey={section.key}
          row={row}
          rowIndex={i}
          fields={section.fields}
          handleCheckboxChange={handleCheckboxChange}
          handleInputChange={handleInputChange}
          handleEditClick={handleEditClick}
        />
      ))}
      Size={section.size}
      Button="Add"
      onButtonClick={() => handleAdd({ block: section })}
      Heading={section.heading}
    />
  );
};

export default SectionContainer;

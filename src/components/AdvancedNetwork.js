import React from "react";
import ToggleButton from "./ToggleButton";
import InputField from "./InputField";

function AdvancedNetwork({ isAdvanced, handleToggleAdvanced }) {
  return (
    <div>
      <ToggleButton
        label="Advanced Network"
        value={isAdvanced}
        onToggle={handleToggleAdvanced}
      >
        <InputField label="MTU" type="text" />
        <InputField label="Bandwidth" type="text" />
        <InputField label="Port HTTPS" type="text" />
      </ToggleButton>
    </div>
  );
}

export default AdvancedNetwork;

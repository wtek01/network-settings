import React from "react";
import InputField from "./InputField";

function MaskInput({ ipMode }) {
  return <InputField label="Mask" type="text" disabled={ipMode === "DHCP"} />;
}

export default MaskInput;

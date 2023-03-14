import React from "react";
import InputField from "./InputField";

function GatewayInput({ ipMode }) {
  return (
    <InputField label="Gateway" type="text" disabled={ipMode === "DHCP"} />
  );
}

export default GatewayInput;

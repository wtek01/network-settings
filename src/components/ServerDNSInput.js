import React from "react";
import InputField from "./InputField";

function ServerDNSInput({ ipMode }) {
  return (
    <InputField label="Server DNS" type="text" disabled={ipMode === "DHCP"} />
  );
}

export default ServerDNSInput;

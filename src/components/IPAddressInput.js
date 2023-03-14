import React from "react";
import MultiInputField from "./MultiInputField";

function IPAddressInput({
  ips,
  handleIpChange,
  handleAddIp,
  handleRemoveIp,
  ipMode
}) {
  return (
    <MultiInputField
      label="IP Address"
      values={ips}
      onChange={handleIpChange}
      onAdd={ipMode === "Fixe" ? handleAddIp : null}
      onRemove={ipMode === "Fixe" ? handleRemoveIp : null}
      disabled={ipMode === "DHCP"}
    />
  );
}

export default IPAddressInput;

import React from "react";

function IPModeSelect({ ipMode, handleIpModeChange }) {
  return (
    <label>
      IP Mode:
      <select value={ipMode} onChange={handleIpModeChange}>
        <option value="Fixe">Fixe</option>
        <option value="DHCP">DHCP</option>
      </select>
    </label>
  );
}

export default IPModeSelect;

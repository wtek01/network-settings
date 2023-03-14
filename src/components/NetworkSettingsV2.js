import React, { useState } from "react";
import IPModeSelect from "./IPModeSelect";
import IPAddressInput from "./IPAddressInput";
import MaskInput from "./MaskInput";
import ServerDNSInput from "./ServerDNSInput";
import GatewayInput from "./GatewayInput";
import AdvancedNetwork from "./AdvancedNetwork";

const NetworkForm = () => {
  const [ipMode, setIpMode] = useState("Fixe");
  const [ips, setIps] = useState([""]);
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleIpModeChange = (event) => {
    setIpMode(event.target.value);
  };

  const handleIpChange = (index, value) => {
    const newIps = [...ips];
    newIps[index] = value;
    setIps(newIps);
  };

  const handleAddIp = () => {
    setIps([...ips, ""]);
  };

  const handleRemoveIp = (index) => {
    const newIps = [...ips];
    newIps.splice(index, 1);
    setIps(newIps);
  };

  const handleToggleAdvanced = () => {
    setIsAdvanced(!isAdvanced);
  };

  return (
    <div className="container">
      <IPModeSelect ipMode={ipMode} handleIpModeChange={handleIpModeChange} />
      <IPAddressInput
        ips={ips}
        handleIpChange={handleIpChange}
        handleAddIp={handleAddIp}
        handleRemoveIp={handleRemoveIp}
        ipMode={ipMode}
      />
      <MaskInput ipMode={ipMode} />
      <ServerDNSInput ipMode={ipMode} />
      <GatewayInput ipMode={ipMode} />
      <AdvancedNetwork
        isAdvanced={isAdvanced}
        handleToggleAdvanced={handleToggleAdvanced}
      />
    </div>
  );
};

export default NetworkForm;

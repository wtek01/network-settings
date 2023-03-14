import { useState } from "react";
import "./App.css";

export default function APP() {
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
    <div>
      <label>
        IP Mode:
        <select value={ipMode} onChange={handleIpModeChange}>
          <option value="Fixe">Fixe</option>
          <option value="DHCP">DHCP</option>
        </select>
      </label>
      <div>
        {ips.map((ip, index) => (
          <div key={index}>
            <label>
              IP Address #{index + 1}:
              <input
                type="text"
                value={ip}
                onChange={(event) => handleIpChange(index, event.target.value)}
                disabled={ipMode === "DHCP"}
              />
            </label>
            {ipMode === "Fixe" && (
              <button onClick={() => handleRemoveIp(index)}>Remove</button>
            )}
          </div>
        ))}
        {ipMode === "Fixe" && (
          <button onClick={handleAddIp}>Add IP Address</button>
        )}
      </div>
      <label>
        Mask:
        <input type="text" disabled={ipMode === "DHCP"} />
      </label>
      <label>
        Server DNS:
        <input type="text" disabled={ipMode === "DHCP"} />
      </label>
      <label>
        Gateway:
        <input type="text" disabled={ipMode === "DHCP"} />
      </label>
      <div>
        <button onClick={handleToggleAdvanced}>
          {isAdvanced ? "Hide" : "Show"} Advanced Network
        </button>
        {isAdvanced && (
          <div>
            <label>
              MTU:
              <input type="text" />
            </label>
            <label>
              Bandwidth:
              <input type="text" />
            </label>
            <label>
              Port HTTPS:
              <input type="text" />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import NetworkSettingsV2 from "./components/NetworkSettingsV2";
import NetworkSettingsV1 from "./NetworkSettingsV1";

import "./App.css";

export default function APP() {
  return (
    <>
      <NetworkSettingsV2 />
      {/*<NetworkSettingsV1 />*/}
    </>
  );
}

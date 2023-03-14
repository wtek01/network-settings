import React from "react";
import Button from "./Button";

function ToggleButton({ label, value, onToggle, children }) {
  return (
    <div>
      <Button onClick={onToggle}>
        {value ? `Hide ${label}` : `Show ${label}`}
      </Button>
      {value && <div>{children}</div>}
    </div>
  );
}

export default ToggleButton;

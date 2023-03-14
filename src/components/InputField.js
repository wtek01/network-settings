import React from "react";

function InputField({ label, type, value, onChange, disabled }) {
  return (
    <label>
      {label}:
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </label>
  );
}

export default InputField;

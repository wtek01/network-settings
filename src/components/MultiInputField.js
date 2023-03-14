import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function MultiInputField({
  label,
  values,
  onChange,
  onAdd,
  onRemove,
  disabled
}) {
  return (
    <div>
      {values.map((value, index) => (
        <div key={index}>
          <InputField
            label={`${label} #${index + 1}`}
            type="text"
            value={value}
            onChange={(event) => onChange(index, event.target.value)}
            disabled={disabled}
          />
          {onRemove && (
            <Button onClick={() => onRemove(index)} disabled={disabled}>
              Remove
            </Button>
          )}
        </div>
      ))}
      {onAdd && (
        <Button onClick={onAdd} disabled={disabled}>
          Add {label}
        </Button>
      )}
    </div>
  );
}

export default MultiInputField;

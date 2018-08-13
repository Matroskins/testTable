import React from "react";
import TextField from "@material-ui/core/TextField";

const InputRow = ({ value, onChange, name, id, label }) => {
  return (
    <TextField
    value={value}
    name={name}
    label={label}
    onChange={onChange}
    id={id}
    InputProps={{
      disableUnderline: true,
    }}
    InputLabelProps={{
      shrink: true
    }}
  />
  );
};

export default InputRow;

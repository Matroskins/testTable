import React from "react";
import TextField from "@material-ui/core/TextField";

const InputRow = ({ value, inputHeight, onChange, name, id, label }) => {
  return (
    <TextField
    value={value}
    name={name}
    label={label}
    onChange={onChange}
    id={id}
    style={{width: '100%'}}
    InputProps={{
      disableUnderline: true,
      style: {
        borderRadius: 15,
        backgroundColor: 'white',
        minHeight: `${inputHeight}px`
      }
    }}
    InputLabelProps={{
      shrink: true,
    }}
  />
  );
};

export default InputRow;

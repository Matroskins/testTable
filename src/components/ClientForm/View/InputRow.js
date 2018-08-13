import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
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

 /* <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id}  value={value} onChange={onChange} />
    </FormControl> */
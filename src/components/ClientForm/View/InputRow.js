// @flow

import React from "react";
import { TextField } from "@material-ui/core";

type inputRowType = {
  value: number | string,
  label: string,
  id: number | string,
  name: string,
  inputHeight: number,
  onChange: Function
};
const InputRow = ({
  value,
  inputHeight,
  onChange,
  name,
  id,
  label
}: inputRowType) => {
  return (
    <TextField
      value={value}
      name={name}
      label={label}
      onChange={onChange}
      id={id}
      style={{ width: "100%" }}
      InputProps={{
        disableUnderline: true,
        style: {
          borderRadius: 15,
          backgroundColor: "white",
          minHeight: `${inputHeight}px`
        }
      }}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default InputRow;

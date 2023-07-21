import React from "react";
import style from "./MySelect.module.css";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <FormControl size="small" fullWidth>
        <InputLabel>{defaultValue}</InputLabel>
      <Select
        value={value}
        label={defaultValue}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;

{
  /* <select value={value} onChange={event => onChange(event.target.value)} className={style.select}>
<option disabled value="">{defaultValue}</option>
{options.map(option =>
    <option key={option.value} value = {option.value}>
        {option.name}
    </option>                
    )}
</select> */
}

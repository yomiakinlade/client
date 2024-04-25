import React from "react";
import { Box } from "@mui/material";
import InputFields from "./InputFields";

function TextFields({ values, handleChange, fields }) {
  return (
    <Box>
      {fields.map((field, index) => (
        <InputFields
          key={index}
          label={field.label}
          placeholder={field.placeholder}
          inputType={field.inputType}
          options={field.options}
          value={values[field.name]}
          onChange={(newValue) => handleChange(field.name, newValue)}
          toolTip={field.toolTip}
        />
      ))}
    </Box>
  );
}

export default TextFields;

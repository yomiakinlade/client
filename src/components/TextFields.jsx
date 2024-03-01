import React, { useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const InputField = ({
  label,
  placeholder,
  inputType = "text",
  options,
  value,
  onChange,
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap={1}
    marginTop="20px"
    backgroundColor="#f0f0f0"
    border="1px solid darkslategrey"
    borderRadius="5px"
  >
    <Typography
      fontWeight={800}
      color="darkslategrey"
      flexShrink={0}
      textAlign="left"
      width={125}
      padding={1}
    >
      {label}:
    </Typography>
    <Box width="2px" height="24px" bgcolor="darkslategrey" />
    {inputType !== "select" ? (
      <input
        type={inputType}
        placeholder={placeholder}
        style={{
          padding: "5px",
          border: "none",
          backgroundColor: "transparent",
          flexGrow: 1,
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <Select
        displayEmpty
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          flexGrow: 1,
          padding: "0 10px",
          border: "none",
          backgroundColor: "transparent",
        }}
        renderValue={(selected) => (!selected ? placeholder : selected)}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    )}
  </Box>
);

function TextFields() {
  const [values, setValues] = useState({
    appraisee: "",
    appraiser: "",
    role: "",
    baseSchool: "",
    appraisalDate: "",
    reviewType: "",
  });

  const handleChange = (name, newValue) => {
    setValues({ ...values, [name]: newValue });
  };

  const fields = [
    {
      name: "appraisee",
      label: "Appraisee",
      placeholder: "Enter Appraisee Name",
      inputType: "text",
    },
    {
      name: "appraiser",
      label: "Appraiser",
      placeholder: "Enter Appraiser Name",
      inputType: "text",
    },
    {
      name: "role",
      label: "Role",
      placeholder: "Enter Role",
      inputType: "text",
    },
    {
      name: "baseSchool",
      label: "Base / School",
      placeholder: "Enter Name",
      inputType: "text",
    },
    {
      name: "appraisalDate",
      label: "Appraisal Date",
      placeholder: "Select Date",
      inputType: "date",
    },
    {
      name: "reviewType",
      label: "Review Type",
      placeholder: "Choose Type",
      inputType: "select",
      options: ["Probation", "Appraisal", "Review"],
    },
  ];

  return (
    <Box>
      {fields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          placeholder={field.placeholder}
          inputType={field.inputType}
          options={field.options}
          value={values[field.name]}
          onChange={(newValue) => handleChange(field.name, newValue)}
        />
      ))}
    </Box>
  );
}

export default TextFields;

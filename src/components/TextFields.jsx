import React from "react";
import { Box, Typography } from "@mui/material";

// Modified InputField component to accept inputType
const InputField = ({ label, placeholder, inputType = "text" }) => (
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
    {/* Vertical Separator */}
    <Box width="2px" height="24px" bgcolor="darkslategrey" />
    <input
      type={inputType} // Use inputType prop here
      placeholder={placeholder}
      style={{
        padding: "5px",
        border: "none",
        backgroundColor: "transparent",
        flexGrow: 1,
      }}
    />
  </Box>
);

function TextFields() {
  const fields = [
    {
      label: "Appraisee",
      placeholder: "Enter Appraisee Name",
      inputType: "text",
    },
    {
      label: "Appraiser",
      placeholder: "Enter Appraiser Name",
      inputType: "text",
    },
    { label: "Role", placeholder: "Enter Role", inputType: "text" },
    { label: "Base / School", placeholder: "Enter Name", inputType: "text" },
    // Added new date field
    { label: "Appraisal Date", placeholder: "Select Date", inputType: "date" },
  ];

  return (
    <Box>
      {fields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          placeholder={field.placeholder}
          inputType={field.inputType} // Pass inputType to InputField
        />
      ))}
    </Box>
  );
}

export default TextFields;

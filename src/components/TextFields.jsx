import React from "react";
import { Box, Typography } from "@mui/material";

// Reusable InputField component
const InputField = ({ label, placeholder }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap={1} // Adjusted gap to accommodate the separator
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
    <Box
      width="2px" // Width of the separator
      height="24px" // Adjust height according to your needs
      bgcolor="darkslategrey" // Color of the separator
    />
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: "5px",
        border: "none",
        backgroundColor: "transparent",
        flexGrow: 1, // Ensure input takes up remaining space
      }}
    />
  </Box>
);

function TextFields() {
  const fields = [
    { label: "Appraisee", placeholder: "Enter Appraisee Name" },
    { label: "Appraiser", placeholder: "Enter Appraiser Name" },
    { label: "Role", placeholder: "Enter Role" },
    { label: "Base / School", placeholder: "Enter Name" },
  ];

  return (
    <Box>
      {fields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          placeholder={field.placeholder}
        />
      ))}
    </Box>
  );
}

export default TextFields;

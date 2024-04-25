import { Box, MenuItem, Select, Tooltip, Typography } from "@mui/material";
import React from "react";

const InputFields = ({
  label,
  placeholder,
  inputType = "text",
  options,
  value,
  onChange,
  toolTip,
}) => (
  <Tooltip
    title={toolTip}
    arrow
    placement="top"
    PopperProps={{
      disablePortal: true,
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop="10px"
      backgroundColor="#f0f0f0"
      border="1px solid darkslategrey"
      borderRadius="5px"
    >
      <Typography
        fontWeight={500}
        color="darkslategrey"
        flexShrink={0}
        textAlign="left"
        width={125}
        padding={0.5}
        fontSize={14}
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
            height: "30px",
            alignItems: "center",
            fontSize: "14px",
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
  </Tooltip>
);

export default InputFields;

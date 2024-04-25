import React from "react";
import { Box, Button, Typography } from "@mui/material";

function ResultsFields({
  name,
  roleSelected,
  appraiseePosition,
  appraiserPosition,
  targetPosition,
  setAppraiseePosition,
  setAppraiserPosition,
  setTargetPosition,
}) {
  return (
    <Box display="flex" flexDirection="column" gap={1.5} width="100%">
      <Typography variant={"h6"}>
        {name} - {roleSelected}
      </Typography>
      {/* Appraisee Position */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        padding="5px"
        backgroundColor="#f0f0f0"
        border="1px solid darkslategrey"
        borderRadius="5px"
        height="20px"
      >
        <Typography
          fontWeight={500}
          color="darkslategrey"
          flexShrink={0}
          width={200} // Adjust based on your design needs
          textAlign="left"
          fontSize={14}
        >
          Appraisee Score:
        </Typography>
        <Typography flexGrow={1} textAlign="center">
          {appraiseePosition?.toUpperCase()}
        </Typography>
        <Button
          onClick={() => setAppraiseePosition(null)}
          variant="contained"
          size="small"
          sx={{
            fontSize: "10px",
          }}
        >
          Reset
        </Button>
      </Box>

      {/* Appraiser Position */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        padding="5px"
        backgroundColor="#f0f0f0"
        border="1px solid darkslategrey"
        borderRadius="5px"
        height="20px"
      >
        <Typography
          fontWeight={500}
          color="darkslategrey"
          flexShrink={0}
          width={200} // Adjust based on your design needs
          textAlign="left"
          fontSize={14}
        >
          Appraiser Score:
        </Typography>
        <Typography flexGrow={1} textAlign="center">
          {appraiserPosition?.toUpperCase()}
        </Typography>
        <Button
          onClick={() => setAppraiserPosition(null)}
          variant="contained"
          size="small"
          sx={{
            fontSize: "10px",
          }}
        >
          Reset
        </Button>
      </Box>

      {/* Target Position */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        padding="5px"
        backgroundColor="#f0f0f0"
        border="1px solid darkslategrey"
        borderRadius="5px"
        height="20px"
      >
        <Typography
          fontWeight={500}
          color="darkslategrey"
          flexShrink={0}
          width={200} // Adjust based on your design needs
          textAlign="left"
          fontSize={14}
        >
          Target / Goal Score:
        </Typography>
        <Typography flexGrow={1} textAlign="center">
          {targetPosition?.toUpperCase()}
        </Typography>
        <Button
          onClick={() => setTargetPosition(null)}
          variant="contained"
          size="small"
          sx={{
            fontSize: "10px",
          }}
        >
          Reset
        </Button>
      </Box>

      {/* Reset All Button */}
      {appraiseePosition && appraiserPosition && targetPosition ? (
        <Box display="flex" justifyContent="center">
          <Button
            onClick={() => {
              setAppraiseePosition(null);
              setAppraiserPosition(null);
              setTargetPosition(null);
            }}
            variant="contained"
            size="small"
          >
            Reset - {roleSelected} {name}
          </Button>
        </Box>
      ) : null}
    </Box>
  );
}

export default ResultsFields;

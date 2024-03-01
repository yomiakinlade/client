import React from "react";
import { Box, Button, Typography } from "@mui/material";

function ResultsFields({
  appraiseePosition,
  appraiserPosition,
  targetPosition,
  setAppraiseePosition,
  setAppraiserPosition,
  setTargetPosition,
}) {
  return (
    <Box
      // padding="20px"
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
      // mx={1}
    >
      {/* Appraisee Position */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        padding="10px"
        backgroundColor="#f0f0f0"
        border="1px solid darkslategrey"
        borderRadius="5px"
        height="20px"
      >
        <Typography
          fontWeight={800}
          color="darkslategrey"
          flexShrink={0}
          width={200} // Adjust based on your design needs
          textAlign="left"
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
        >
          Reset
        </Button>
      </Box>

      {/* Appraiser Position */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        padding="10px"
        backgroundColor="#f0f0f0"
        border="1px solid darkslategrey"
        borderRadius="5px"
        height="20px"
      >
        <Typography
          fontWeight={800}
          color="darkslategrey"
          flexShrink={0}
          width={200} // Adjust based on your design needs
          textAlign="left"
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
        >
          Reset
        </Button>
      </Box>

      {/* Target Position */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        padding="10px"
        backgroundColor="#f0f0f0"
        border="1px solid darkslategrey"
        borderRadius="5px"
        height="20px"
      >
        <Typography
          fontWeight={800}
          color="darkslategrey"
          flexShrink={0}
          width={200} // Adjust based on your design needs
          textAlign="left"
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
        >
          Reset
        </Button>
      </Box>

      {/* Reset All Button */}
      {appraiseePosition && appraiserPosition && targetPosition ? (
        <Box display="flex" justifyContent="center" marginTop="10px">
          <Button
            onClick={() => {
              setAppraiseePosition(null);
              setAppraiserPosition(null);
              setTargetPosition(null);
            }}
            variant="contained"
            size="small"
          >
            Reset All
          </Button>
        </Box>
      ) : null}
    </Box>
  );
}

export default ResultsFields;

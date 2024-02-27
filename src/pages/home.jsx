import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./home.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import logo from "../assets/images/logo.png";
import FlexBetween from "../components/flexbetween";
import AppraisalGrid from "../components/AppraisalGrid";
import TextFields from "../components/TextFields";
import ResultsFields from "../components/ResultsFields";

function Home() {
  const [appraiseePosition, setAppraiseePosition] = useState(null);
  const [appraiserPosition, setAppraiserPosition] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);

  const handleItemClick = (item) => {
    if (!appraiseePosition) {
      setAppraiseePosition(item);
    } else if (!appraiserPosition) {
      setAppraiserPosition(item);
    } else if (!targetPosition) {
      setTargetPosition(item);
    } else {
      // Reset or further logic for additional selections
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh" m={3}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        // justifyContent="center"
        marginBottom="20px"
        gap={5}
      >
        <img src={logo} alt="" />
        <Typography variant="h4" fontWeight={800} color="darkslategrey">
          Active Learning Trust Appraisal Conversation Grid
        </Typography>
      </Box>

      <FlexBetween>
        <AppraisalGrid
          appraiseePosition={appraiseePosition}
          appraiserPosition={appraiserPosition}
          targetPosition={targetPosition}
          handleItemClick={handleItemClick}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          width="100%"
          maxWidth="400px"
        >
          <TextFields />
          <ResultsFields
            appraiseePosition={appraiseePosition}
            appraiserPosition={appraiserPosition}
            targetPosition={targetPosition}
            setAppraiseePosition={setAppraiseePosition}
            setAppraiserPosition={setAppraiserPosition}
            setTargetPosition={setTargetPosition}
          />
        </Box>
      </FlexBetween>
    </Box>
  );
}

export default Home;

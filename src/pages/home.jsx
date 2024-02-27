import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./home.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import logo from "../assets/images/logo.png";
import AppraisalGrid from "../components/AppraisalGrid";
import TextFields from "../components/TextFields";
import ResultsFields from "../components/ResultsFields";
import useAppraisalConversationGridState from "../hooks/useAppraisalConversationGridState";

function Home() {
  const {
    appraiseePosition,
    appraiserPosition,
    targetPosition,
    handleItemClick,
    setAppraiseePosition,
    setAppraiserPosition,
    setTargetPosition,
    gridWidth,
    layout,
    matchesMdUp,
    matchesSmDown,
  } = useAppraisalConversationGridState();

  return (
    <Box display="flex" flexDirection="column" m={3} width="100%">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        // justifyContent="center"
        marginBottom="20px"
        gap={5}
        width={"100%"}
      >
        <img src={logo} alt="" style={{ width: "100px", height: "100px" }} />
        <Typography
          variant={matchesMdUp ? "h4" : "h5"}
          fontWeight={800}
          color="darkslategrey"
          mr={6}
        >
          Active Learning Trust Appraisal Conversation Grid
        </Typography>
      </Box>

      <Box
        // if a small screen the flex direction will be column
        display="flex"
        flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        justifyContent="space-between"
        height="100%"
        width="100%"
      >
        <AppraisalGrid
          appraiseePosition={appraiseePosition}
          appraiserPosition={appraiserPosition}
          targetPosition={targetPosition}
          handleItemClick={handleItemClick}
          gridWidth={gridWidth}
          layout={layout}
          matchesMdUp={matchesMdUp}
          matchesSmDown={matchesSmDown}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={{
            xs: "flex-start",
            sm: "flex-start",
            md: "flex-start",
            lg: "space-between",
          }}
          height="750px"
          width="100%"
          maxWidth="400px"
          mr={6}
          gap={{
            xs: 3,
            sm: 3,
            md: 3,
            lg: 0,
          }}
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
      </Box>
    </Box>
  );
}

export default Home;

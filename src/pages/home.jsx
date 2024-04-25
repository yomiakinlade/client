import React from "react";
import { Box, Button, Typography } from "@mui/material";
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
    secondAppraiseePosition,
    setSecondAppraiseePosition,
    secondAppraiserPosition,
    setSecondAppraiserPosition,
    secondTargetPosition,
    setSecondTargetPosition,
    textFieldValues,
    values,
    handleChange,
    fields,
    resetAll,
    downloadScreenshot,
    handleExport,
  } = useAppraisalConversationGridState();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      // Apply a maximum width for the entire site content
      maxWidth="1400px"
      // Automatically add margins to center the content
      margin="auto"
      // Add padding or margin as needed for small to large screens
      p={{ xs: 1, sm: 2, md: 4, lg: 4 }}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        // if a small screen the flex direction will be column
        display="flex"
        flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        justifyContent="space-between"
        mb={2}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          // justifyContent="center"
          marginBottom="20px"
          gap={4}
          width={"100%"}
        >
          <img src={logo} alt="" style={{ width: "100px", height: "100px" }} />
          <Typography
            variant={matchesMdUp ? "h4" : "h5"}
            fontWeight={800}
            color="darkslategrey"
            mr={6}
          >
            Active Learning Trust Appraisal Map
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Button onClick={downloadScreenshot} variant="contained">
            Download Screenshot
          </Button>
          <Button onClick={handleExport} variant="contained">
            Export Data
          </Button>
        </Box>
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
          secondAppraiseePosition={secondAppraiseePosition}
          secondAppraiserPosition={secondAppraiserPosition}
          secondTargetPosition={secondTargetPosition}
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
            lg: "flex-start",
          }}
          height="750px"
          width="100%"
          maxWidth="400px"
          mr={6}
          gap={{
            xs: 3,
            sm: 3,
            md: 3,
            lg: 3,
          }}
        >
          <TextFields
            values={values}
            handleChange={handleChange}
            fields={fields}
          />
          {textFieldValues.role && (
            <ResultsFields
              name={textFieldValues.reviewType}
              roleSelected={textFieldValues.role}
              appraiseePosition={appraiseePosition}
              appraiserPosition={appraiserPosition}
              targetPosition={targetPosition}
              setAppraiseePosition={setAppraiseePosition}
              setAppraiserPosition={setAppraiserPosition}
              setTargetPosition={setTargetPosition}
            />
          )}
          {textFieldValues.secondRole && (
            <ResultsFields
              name={textFieldValues.reviewType}
              roleSelected={textFieldValues.secondRole}
              appraiseePosition={secondAppraiseePosition}
              appraiserPosition={secondAppraiserPosition}
              targetPosition={secondTargetPosition}
              setAppraiseePosition={setSecondAppraiseePosition}
              setAppraiserPosition={setSecondAppraiserPosition}
              setTargetPosition={setSecondTargetPosition}
            />
          )}
        </Box>
      </Box>
      <Button
        onClick={resetAll}
        variant="contained"
        sx={{
          marginTop: "20px",
        }}
      >
        Reset All
      </Button>
    </Box>
  );
}

export default Home;

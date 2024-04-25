import React from "react";
import { Box, Typography } from "@mui/material";
import GridLayout from "react-grid-layout";
import rightLegend from "../assets/images/rightLegend.png";
import leftLegend from "../assets/images/leftLegend.png";
import bottomLegend from "../assets/images/bottomLegend.png";
import AppraisalMap from "../assets/images/AppraisalMap.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SquareIcon from "@mui/icons-material/Square";

function AppraisalGrid({
  appraiseePosition,
  appraiserPosition,
  targetPosition,
  secondAppraiseePosition,
  secondAppraiserPosition,
  secondTargetPosition,
  handleItemClick,
  gridWidth,
  layout,
}) {
  // Determine if text for each role should be displayed based on overlap
  const showSecondAppraiseeText =
    secondAppraiseePosition !== targetPosition &&
    secondAppraiseePosition !== secondTargetPosition &&
    secondAppraiseePosition !== appraiserPosition &&
    secondAppraiseePosition !== secondAppraiserPosition &&
    secondAppraiseePosition !== appraiseePosition;
  const showAppraiseeText =
    appraiseePosition !== targetPosition &&
    appraiseePosition !== secondTargetPosition &&
    appraiseePosition !== appraiserPosition &&
    appraiseePosition !== secondAppraiserPosition;
  const showSecondAppraiserText =
    secondAppraiserPosition !== targetPosition &&
    secondAppraiserPosition !== secondTargetPosition &&
    secondAppraiserPosition !== appraiseePosition;
  const showAppraiserText =
    appraiserPosition !== targetPosition &&
    appraiserPosition !== secondTargetPosition;
  const showSecondTargetText = secondTargetPosition !== targetPosition;

  return (
    <Box display="flex" flexDirection="row">
      <img
        src={leftLegend}
        alt=""
        height={gridWidth}
        style={{ marginRight: "10px" }}
      />
      <Box>
        <Box
          sx={{
            width: gridWidth,
            height: gridWidth,
            // background: "linear-gradient(to top right, red, lightgreen)",
            position: "relative",
          }}
        >
          {/* Add the AppraisalGrid image */}
          <img
            src={AppraisalMap}
            alt="Appraisal Grid"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute", // Position it absolutely to cover the entire Box area
              top: 0,
              left: 0,
            }}
          />
          <GridLayout
            className="layout"
            layout={layout}
            cols={10}
            rowHeight={gridWidth / 10}
            width={gridWidth}
            margin={[0, 0]}
            isDraggable={false}
            isResizable={false}
          >
            {layout.map((item) => (
              <Box
                key={item.i}
                data-grid={item}
                sx={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
                onClick={() => handleItemClick(item.i)}
              >
                {/* Appraisee Icon and Conditional Text */}
                {item.i === appraiseePosition && (
                  <>
                    <FiberManualRecordIcon
                      sx={{
                        color:
                          appraiseePosition === secondAppraiseePosition
                            ? "#4dcfff"
                            : "#00B0F0",
                        fontSize: {
                          xs: "90px",
                          sm: "100px",
                          md: "110px",
                          lg: "120px",
                        },
                        position: "absolute",
                        zIndex: 2,
                      }}
                    />
                    {showAppraiseeText && (
                      <Typography
                        color="white"
                        fontSize={{
                          xs: "10px",
                          sm: "11px",
                          md: "12px",
                          lg: "14px",
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 3,
                        }}
                      >
                        Appraisee
                      </Typography>
                    )}
                  </>
                )}
                {/* Appraiser Icon and Conditional Text */}
                {item.i === appraiserPosition && (
                  <>
                    <FiberManualRecordIcon
                      sx={{
                        color:
                          appraiserPosition === secondAppraiserPosition
                            ? "#1a9fff"
                            : "#0070C0",
                        fontSize: {
                          xs: "75px",
                          sm: "80px",
                          md: "90px",
                          lg: "100px",
                        },
                        position: "absolute",
                        zIndex: 4,
                      }}
                    />
                    {showAppraiserText && (
                      <Typography
                        color="white"
                        fontSize={{
                          xs: "10px",
                          sm: "11px",
                          md: "12px",
                          lg: "14px",
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 5,
                        }}
                      >
                        Appraiser
                      </Typography>
                    )}
                  </>
                )}
                {/* Target Icon and Text (always shown since it's on top) */}
                {item.i === targetPosition && (
                  <>
                    <FiberManualRecordIcon
                      sx={{
                        color:
                          targetPosition === secondTargetPosition
                            ? "#ad76d6"
                            : "#7030A0",
                        fontSize: {
                          xs: "60px",
                          sm: "65px",
                          md: "70px",
                          lg: "75px",
                        },
                        position: "absolute",
                        zIndex: 6,
                      }}
                    />
                    <Typography
                      color="white"
                      fontSize={{
                        xs: "10px",
                        sm: "11px",
                        md: "12px",
                        lg: "14px",
                      }}
                      sx={{
                        position: "absolute",
                        zIndex: 7,
                      }}
                    >
                      Goal
                    </Typography>
                  </>
                )}
                {/* Second Appraisee Icon and Conditional Text */}
                {item.i === secondAppraiseePosition && (
                  <>
                    <SquareIcon
                      sx={{
                        color: "#00B0F0",
                        fontSize: {
                          xs: "90px",
                          sm: "100px",
                          md: "110px",
                          lg: "120px",
                        },
                        position: "absolute",
                        zIndex: 1,
                      }}
                    />

                    {showSecondAppraiseeText && (
                      <Typography
                        color="white"
                        fontSize={{
                          xs: "10px",
                          sm: "11px",
                          md: "12px",
                          lg: "14px",
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                        }}
                      >
                        Appraisee
                      </Typography>
                    )}
                  </>
                )}
                {/* Second Appraiser Icon and Conditional Text */}
                {item.i === secondAppraiserPosition && (
                  <>
                    <SquareIcon
                      sx={{
                        color: "#0070C0",
                        fontSize: {
                          xs: "75px",
                          sm: "80px",
                          md: "90px",
                          lg: "100px",
                        },
                        position: "absolute",
                        zIndex: 3,
                      }}
                    />

                    {showSecondAppraiserText && (
                      <Typography
                        color="white"
                        fontSize={{
                          xs: "10px",
                          sm: "11px",
                          md: "12px",
                          lg: "14px",
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 4,
                        }}
                      >
                        Appraiser
                      </Typography>
                    )}
                  </>
                )}
                {/* Second Target Icon and Text (always shown since it's on top) */}
                {item.i === secondTargetPosition && (
                  <>
                    <SquareIcon
                      sx={{
                        color: "#7030A0",
                        fontSize: {
                          xs: "60px",
                          sm: "65px",
                          md: "70px",
                          lg: "75px",
                        },
                        position: "absolute",
                        zIndex: 5,
                      }}
                    />

                    {showSecondTargetText && (
                      <Typography
                        color="white"
                        fontSize={{
                          xs: "10px",
                          sm: "11px",
                          md: "12px",
                          lg: "14px",
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 6,
                        }}
                      >
                        Goal
                      </Typography>
                    )}
                  </>
                )}
              </Box>
            ))}
          </GridLayout>
        </Box>
        <img src={bottomLegend} alt="" width={gridWidth} />
      </Box>
      <img
        src={rightLegend}
        alt=""
        height={gridWidth}
        style={{ marginLeft: "10px" }}
      />
    </Box>
  );
}

export default AppraisalGrid;

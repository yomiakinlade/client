import React from "react";
import { Box, Typography } from "@mui/material";
import GridLayout from "react-grid-layout";
import rightLegend from "../assets/images/rightLegend.png";
import leftLegend from "../assets/images/leftLegend.png";
import bottomLegend from "../assets/images/bottomLegend.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function AppraisalGrid({
  appraiseePosition,
  appraiserPosition,
  targetPosition,
  handleItemClick,
  gridWidth,
  layout,
  matchesMdUp,
  matchesSmDown,
}) {
  // Determine if text for each role should be displayed based on overlap
  const showAppraiseeText =
    appraiseePosition !== appraiserPosition &&
    appraiseePosition !== targetPosition;
  const showAppraiserText = appraiserPosition !== targetPosition;

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
            background: "linear-gradient(to top right, red, lightgreen)",
          }}
        >
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
                        color: "lightblue",
                        fontSize: "100px",
                        position: "absolute",
                        zIndex: 1,
                      }}
                    />
                    {showAppraiseeText && (
                      <Typography
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
                {/* Appraiser Icon and Conditional Text */}
                {item.i === appraiserPosition && (
                  <>
                    <FiberManualRecordIcon
                      sx={{
                        color: "lightgreen",
                        fontSize: "75px",
                        position: "absolute",
                        zIndex: 2,
                      }}
                    />
                    {showAppraiserText && (
                      <Typography
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
                        color: "lightcoral",
                        fontSize: "50px",
                        position: "absolute",
                        zIndex: 3,
                      }}
                    />
                    <Typography
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
                      Goal
                    </Typography>
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

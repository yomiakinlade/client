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
  return (
    <Box display="flex" flexDirection="row">
      <img
        src={leftLegend}
        alt=""
        height={gridWidth}
        style={{
          marginRight: "10px",
        }}
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
                className={`grid-item ${
                  item.i === appraiseePosition ? "appraisee" : ""
                } ${item.i === appraiserPosition ? "appraiser" : ""} ${
                  item.i === targetPosition ? "target" : ""
                }`}
                data-grid={item}
                sx={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
                onClick={() => handleItemClick(item.i)}
              >
                <FiberManualRecordIcon
                  sx={{
                    color:
                      item.i === appraiseePosition
                        ? "lightblue"
                        : item.i === appraiserPosition
                        ? "lightgreen"
                        : item.i === targetPosition
                        ? "lightcoral"
                        : "transparent", // Use "transparent" to hide icons not matching positions
                    fontSize: {
                      xs: "40px",
                      sm: "50px",
                      md: "75px",
                      lg: "100px",
                    },
                  }}
                />
                {/* Only display text for specific positions */}
                {item.i === appraiseePosition ||
                item.i === appraiserPosition ||
                item.i === targetPosition ? (
                  <Typography
                    variant="caption"
                    sx={{
                      position: "absolute",
                      // color: "white",
                      fontWeight: 800,
                    }}
                    fontSize={{
                      xs: "10px",
                      sm: "11px",
                      md: "12px",
                      lg: "13px",
                    }}
                  >
                    {item.i === appraiseePosition
                      ? "Appraisee"
                      : item.i === appraiserPosition
                      ? "Appraiser"
                      : item.i === targetPosition
                      ? "Goal"
                      : ""}
                  </Typography>
                ) : null}
              </Box>
            ))}
          </GridLayout>
        </Box>
        <img
          src={bottomLegend}
          alt=""
          width={gridWidth}
          // style={{
          //   marginLeft: "10px",
          // }}
        />
      </Box>
      <img
        src={rightLegend}
        alt=""
        height={gridWidth}
        style={{
          marginLeft: "10px",
        }}
      />
    </Box>
  );
}

export default AppraisalGrid;

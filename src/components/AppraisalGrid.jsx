import React from "react";
import { Box } from "@mui/material";
import GridLayout from "react-grid-layout";
import rightLegend from "../assets/images/rightLegend2.png";

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
      <Box
        sx={{
          width: gridWidth, // Dynamically set based on screen size
          height: gridWidth, // Keep the grid square
          background: "linear-gradient(to top right, red, lightgreen)",
        }}
      >
        <GridLayout
          className="layout"
          layout={layout}
          cols={10}
          rowHeight={gridWidth / 10} // Adjust rowHeight based on the dynamic gridWidth
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
              }}
              onClick={() => handleItemClick(item.i)}
            >
              {/* Optionally, display the item identifier */}
              {/* <Typography variant="caption">{item.i}</Typography> */}
            </Box>
          ))}
        </GridLayout>
      </Box>
      {/* Conditionally render the image based on screen size */}
      {matchesMdUp && (
        <img
          src={rightLegend}
          alt=""
          height={gridWidth} // Ensure the image height matches the grid height
          style={{
            marginLeft: "10px",
          }}
        />
      )}
    </Box>
  );
}

export default AppraisalGrid;

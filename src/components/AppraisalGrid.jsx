import { Box } from "@mui/material";
import React from "react";
import GridLayout from "react-grid-layout";

function AppraisalGrid({
  appraiseePosition,
  appraiserPosition,
  targetPosition,
  handleItemClick,
}) {
  const layout = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const id = String.fromCharCode(97 + x) + (y + 1);
      layout.push({ i: id, x: x, y: 9 - y, w: 1, h: 1 });
    }
  }

  return (
    <Box
      sx={{
        width: 800, // Match the GridLayout width
        height: 600, // Match the GridLayout height (rowHeight * numberOfRows)
        background: "linear-gradient(to top right, red, lightgreen)",
      }}
    >
      <GridLayout
        className="layout"
        layout={layout}
        cols={10}
        rowHeight={60}
        width={800}
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
              backgroundColor: "transparent", // Make grid item background transparent
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
  );
}

export default AppraisalGrid;

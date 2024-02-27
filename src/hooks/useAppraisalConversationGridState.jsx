import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const useAppraisalConversationGridState = () => {
  const theme = useTheme();
  // This media query will return true if the screen size is md or larger
  const matchesMdUp = useMediaQuery(theme.breakpoints.up("md"));
  // Additional media query for small screens or smaller
  const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  // Adjust gridWidth based on screen size with an additional condition for small screens
  const gridWidth = matchesMdUp ? 750 : matchesSmDown ? 350 : 500; // 750px for md and up, 300px for sm and down, 500px for in-between
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

  const layout = [];
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const id = String.fromCharCode(97 + x) + (y + 1);
      layout.push({ i: id, x: x, y: 9 - y, w: 1, h: 1 });
    }
  }

  return {
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
  };
};

export default useAppraisalConversationGridState;

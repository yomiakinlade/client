import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import moment from "moment";

const useAppraisalConversationGridState = () => {
  const theme = useTheme();
  // This media query will return true if the screen size is md or larger
  const matchesMdUp = useMediaQuery(theme.breakpoints.up("md"));
  // Additional media query for small screens or smaller
  const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  // Adjust gridWidth based on screen size with an additional condition for small screens
  const gridWidth = matchesMdUp ? 700 : matchesSmDown ? 300 : 450; // 750px for md and up, 300px for sm and down, 500px for in-between

  const [appraiseePosition, setAppraiseePosition] = useState(null);
  const [appraiserPosition, setAppraiserPosition] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);

  const [secondAppraiseePosition, setSecondAppraiseePosition] = useState(null);
  const [secondAppraiserPosition, setSecondAppraiserPosition] = useState(null);
  const [secondTargetPosition, setSecondTargetPosition] = useState(null);

  const [textFieldValues, setTextFieldValues] = useState({});

  const [values, setValues] = useState({
    appraisee: "",
    appraiser: "",
    role: "",
    baseSchool: "",
    appraisalDate: "",
    reviewType: "",
    secondRole: "",
  });

  const fields = [
    {
      name: "appraisee",
      label: "Appraisee",
      placeholder: "Enter Appraisee Name",
      inputType: "text",
      toolTip: "Enter Appraisee Name",
    },
    {
      name: "appraiser",
      label: "Appraiser",
      placeholder: "Enter Appraiser Name",
      inputType: "text",
      toolTip: "Enter Appraiser Name",
    },
    {
      name: "reviewType",
      label: "Review Type",
      placeholder: "Choose Type",
      inputType: "select",
      options: ["Probation", "Appraisal", "Review"],
      toolTip: "Choose Review Type",
    },
    {
      name: "baseSchool",
      label: "Base / School",
      placeholder: "Enter Name",
      inputType: "text",
      toolTip: "Enter Base / School Name",
    },
    {
      name: "appraisalDate",
      label: "Appraisal Date",
      placeholder: "Select Date",
      inputType: "date",
      toolTip: "Select Appraisal Date",
    },
    {
      name: "role",
      label: "Role",
      placeholder: "Enter Role",
      inputType: "text",
      toolTip: "Enter Primary Role",
    },
    {
      name: "secondRole",
      label: "2nd Role",
      placeholder: "Enter Second Role",
      inputType: "text",
      toolTip: "If Applicable, Enter Second Role",
    },
  ];

  const handleChange = (name, newValue) => {
    setValues({ ...values, [name]: newValue });
    handleTextFieldValuesChange({ ...values, [name]: newValue });
  };

  const handleTextFieldValuesChange = (values) => {
    setTextFieldValues(values);
  };

  const handleItemClick = (item) => {
    if (!appraiseePosition) {
      setAppraiseePosition(item);
    } else if (!appraiserPosition) {
      setAppraiserPosition(item);
    } else if (!targetPosition) {
      setTargetPosition(item);
    } else if (!secondAppraiseePosition) {
      setSecondAppraiseePosition(item);
    } else if (!secondAppraiserPosition) {
      setSecondAppraiserPosition(item);
    } else if (!secondTargetPosition) {
      setSecondTargetPosition(item);
    }
  };

  const layout = [];
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const id = String.fromCharCode(97 + x) + (y + 1);
      layout.push({ i: id, x: x, y: 9 - y, w: 1, h: 1 });
    }
  }

  const resetAll = () => {
    setAppraiseePosition(null);
    setAppraiserPosition(null);
    setTargetPosition(null);
    setSecondAppraiseePosition(null);
    setSecondAppraiserPosition(null);
    setSecondTargetPosition(null);
    // reset all values
    setValues({
      appraisee: "",
      appraiser: "",
      role: "",
      baseSchool: "",
      appraisalDate: "",
      reviewType: "",
      secondRole: "",
    });
    handleTextFieldValuesChange({});
  };

  const fileName = `ActiveLearningTrustAppraisalMap-${
    values.appraisee
  }-${moment().format("YYYY-MM-DD")}`;

  const downloadScreenshot = () => {
    html2canvas(document.body).then((canvas) => {
      const image = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${fileName}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const exportToSpreadsheet = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");

    // Generate a binary string from the workbook
    const workbookBinary = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "binary",
    });

    // Convert binary string to character array
    function s2ab(s) {
      const buffer = new ArrayBuffer(s.length);
      const view = new Uint8Array(buffer);
      for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xff;
      }
      return buffer;
    }

    // Create a Blob from the character array
    const xlsxBlob = new Blob([s2ab(workbookBinary)], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Use a link element to trigger the download
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(xlsxBlob);
    link.download = `${fileName}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Gather your data from state
  const handleExport = () => {
    const dataToExport = {
      "Appraisee Name": values.appraisee,
      "Appraiser Name": values.appraiser,
      "Review Type": values.reviewType,
      "Base / School": values.baseSchool,
      "Appraisal Date": values.appraisalDate,
      Role: values.role,
      "Second Role": values.secondRole,

      "Appraisee Position": appraiseePosition,
      "Appraiser Position": appraiserPosition,
      "Target Position": targetPosition,
      "Second Appraisee Position": secondAppraiseePosition,
      "Second Appraiser Position": secondAppraiserPosition,
      "Second Target Position": secondTargetPosition,
    };
    exportToSpreadsheet([dataToExport]);
  };

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
  };
};

export default useAppraisalConversationGridState;

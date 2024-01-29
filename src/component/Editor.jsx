import { Box } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEdittor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Editor = ({ headings, icon, colors, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Box
      sx={{
        flexGrow: open ? 1 : 0,
        flexbasic: 0,
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          background: "#060606",
          color: "#aaaebc",
          justifyContent: "space-between",
          fontWeight: "700",
        }}
      >
        <Box
          sx={{
            background: "#1d1e22",
            display: "flex",
            padding: "9px 12px",
          }}
        >
          <Box
            component={"span"}
            sx={{
              background: colors,
              height: "20px",
              width: "20px",
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 1,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {headings}
        </Box>
        <CloseFullscreenIcon
          fontSize="small"
          sx={{ alignSelf: "center" }}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </Box>
      <ControlledEdittor
        value={value}
        onBeforeChange={handleChange}
        className="controlled-editor"
        options={{
          mode: "xml",
          theme: "monokai",
          extraKeys: { "Ctrl-Space": "autocomplete" },
          lineNumbers: true,
        }}
      />
    </Box>
  );
};

export default Editor;

import React, { useContext } from "react";
import Editor from "./Editor";
import { Box } from "@mui/material";

import { DataContext } from "./context/DataProvider";

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", background: "#060606" }}>
      <Editor
        headings="HTML"
        icon="/"
        colors={"#ff3c41"}
        value={html}
        onChange={setHtml}
      />
      <Editor
        headings="CSS"
        icon="*"
        colors={"#0ebeff"}
        value={css}
        onChange={setCss}
      />
      <Editor
        headings="JavaScript"
        icon={"( )"}
        colors={"#fcd000"}
        value={js}
        onChange={setJs}
      />
    </Box>
  );
};

export default Code;

import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/DataProvider";

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);
  const srcCode = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <Box sx={{ height: "100vh" }}>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width={"100%"}
        height={"100%"}
      />
    </Box>
  );
};

export default Result;

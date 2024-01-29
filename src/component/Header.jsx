import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <AppBar sx={{ height: "9vh", background: "#060606", position: "static" }}>
      <Toolbar>
        <img src={logo} style={{ width: 70 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

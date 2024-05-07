import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Eror from "./screens/Error/Eror";
import Playground from "./screens/playground";
import { GlobalStyle } from "./style/global";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Eror />} />
        <Route path="/dfdfdfdklfsd" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

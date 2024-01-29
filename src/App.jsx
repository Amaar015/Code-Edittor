import React from "react";
import Home from "./component/Home";
import DataProvider from "./component/context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
};

export default App;

import React from "react";
import styled from "styled-components";
import LeftComponents from "./LeftComponents";
import RightComponent from "./RightComponent";

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <StyledHome>
      <LeftComponents />
      <RightComponent />
    </StyledHome>
  );
};

export default Home;

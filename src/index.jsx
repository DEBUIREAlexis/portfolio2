import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import styled from "styled-components";

const StyledMain = styled.div`
  max-width: 1200px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <StyledMain>
      <Header />
      <Home />
      <Project />
      <Skills />
    </StyledMain>
  </React.StrictMode>
);

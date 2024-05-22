import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import styled from "styled-components";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import GoTopPage from "./components/GoTopPage";

const StyledMain = styled.div`
  max-width: 1200px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GoTopPage />
    <StyledMain>
      <Header />
      <Home />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </StyledMain>
  </React.StrictMode>
);

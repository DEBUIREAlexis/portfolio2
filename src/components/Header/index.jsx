import styled from "styled-components";
import colors from "../../utils/style/colors";
import NavBar from "../NavBar";
import Logo from "../../assets/Logo.webp";

const StyledHeader = styled.header`
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 20px 0px 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogoAndMail = styled.div`
  display: flex;
  gap: 16px;
  font-weight: 700;

  @media (max-width: 380px) {
    p {
      display: none;
    }
  }
`;

const StyledLogo = styled.img`
  height: 60px;
  border-radius: 50%;
  margin-left: 12px;
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 24px;
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

function Header() {
  return (
    <StyledHeader id="header">
      <StyledWrap>
        <StyledLogoAndMail>
          <StyledLogo src={Logo} />
          <p>alexisdebuire@gmail.com</p>
        </StyledLogoAndMail>

        <NavBar />
      </StyledWrap>
    </StyledHeader>
  );
}

export default Header;

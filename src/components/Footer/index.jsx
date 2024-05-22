import colors from "../../utils/style/colors";
import styled from "styled-components";
import Socials from "../Socials";

const StyledFooter = styled.footer`
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 60px 40px 30px 40px;
  background-color: ${colors.background};
  bottom: 0px;
  p {
    margin: 0;
  }
`;

const StyledGrowth = styled.div`
  flex-grow: 1;
  display: flex;
`;

function Footer() {
  return (
    <StyledGrowth>
      <StyledFooter>
        <p>Réalisé par Alexis DEBUIRE</p>
        <p>2024</p>
        <Socials />
      </StyledFooter>
    </StyledGrowth>
  );
}

export default Footer;

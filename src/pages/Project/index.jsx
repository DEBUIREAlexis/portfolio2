import colors from "../../utils/style/colors";
import styled from "styled-components";
import Ks from "../../assets/KS-1.png";
import Nc from "../../assets/NC-1.png";
import Vg from "../../assets/VG-1.png";

const StyledWrapper = styled.div`
  background-color: ${colors.highlight};

  margin-top: 40px;
  padding: 0 40px;
`;

const StyledTitle = styled.h2`
  font-size: 32px;
  letter-spacing: 1px;
  background: linear-gradient(
    to right,
    ${colors.secondary_background} 0%,
    ${colors.text_color} 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const StyledDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const StyledImg = styled.img`
  background-color: ${colors.secondary};
  width: 80%;
  padding: 20px;
`;

function Project() {
  return (
    <StyledWrapper>
      <StyledTitle>Mes projets récents</StyledTitle>
      <StyledDescription>
        Voici les trois dernier projets que j'ai fait pendent ma formation
      </StyledDescription>

      <StyledImg src={Ks} />
    </StyledWrapper>
  );
}

export default Project;

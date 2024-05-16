import colors from "../../utils/style/colors";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${colors.secondary_background};
  width: 140px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 8px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledName = styled.h3``;

function SkillCard(props) {
  return (
    <StyledCard>
      <StyledLogo src={props.logo} />
      <StyledName>{props.name}</StyledName>
    </StyledCard>
  );
}

export default SkillCard;

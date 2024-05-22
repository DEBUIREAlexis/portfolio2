import colors from "../../utils/style/colors";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${colors.secondary_background};
  width: 140px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  border: solid 2px ${colors.highlight};
  transition: all 0.2s linear;

  &:hover {
    color: ${colors.highlight};
    border: 2px solid ${colors.secondary_background};
    transition: all 0.2s linear;
    transform-origin: center;
    background-color: ${colors.text_color};
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

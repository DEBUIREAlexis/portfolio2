import styled from "styled-components";
import colors from "../../utils/style/colors";
import SkillCard from "../../components/SkillCard";
import gameMaker from "../../assets/gamemaker.svg";
import unreal from "../../assets/unreal.svg";
import cSharp from "../../assets/csharpLogo.svg";
import figma from "../../assets/figma.svg";
import reactLogo from "../../assets/react.svg";
import javascript from "../../assets/jsLogo.svg";

const StyledWrapper = styled.div`
  background-color: transparent;
  max-width: 640px;
  padding: 60px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const StyledTitle = styled.h2`
  font-size: 32px;
  margin: 0;
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

const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 40px 0;
  justify-content: center;
  max-width: 800px;
  @media (min-width: 600px) {
    gap: 48px;
  }
`;

function Skills() {
  return (
    <StyledWrapper id="skill">
      <StyledTitle>Mes compétences</StyledTitle>
      <StyledDescription>
        Voici mes compétences en web et autres
      </StyledDescription>
      <StyledCardWrapper>
        <SkillCard logo={figma} name="Figma" />
        <SkillCard logo={reactLogo} name="React" />
        <SkillCard logo={cSharp} name="C#" />
        <SkillCard logo={javascript} name="JavaScript" />
        <SkillCard logo={gameMaker} name="Game Maker" />
        <SkillCard logo={unreal} name="Unreal Engine 5" />
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default Skills;

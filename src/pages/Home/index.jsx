import styled from "styled-components";
import colors from "../../utils/style/colors";
import Portrait from "../../assets/Photoprofil.webp";
import Socials from "../../components/Socials";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

const StyledBuffer = styled.div`
  height: 140px;
`;

const StyledTitle = styled.span`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const StyledSubtitle = styled.h1`
  font-size: 35px;
  letter-spacing: 1px;
  background: linear-gradient(
    to right,
    ${colors.secondary_background} 0%,
    ${colors.text_color} 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const StyledImg = styled.img`
  max-width: 70%;

  margin: 24px 0;
  box-sizing: border-box;
  border-radius: 32px;
  rotate: 5deg;
  border: 3px solid ${colors.highlight};
  transition: all 0.2s linear;
  &:hover {
    rotate: 0deg;
    transition: all 0.2s linear;
    border: 3px solid ${colors.secondary_background};
  }

  @media (min-width: 700px) {
    margin: auto;
  }
`;

const StyledP = styled.p`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 1px;
  @media (min-width: 700px) {
    .middle-left {
      grid-area: midLeft;
    }
    .bottom-left {
      grid-area: botLeft;
    }
  }
`;

const StyledTopLeft = styled.div``;

const StyledRight = styled.div`
  justify-content: center;
  display: flex;
  @media (min-width: 700px) {
    grid-area: right;
  }
`;

const StyledImgTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". right"
      "midLeft right"
      "botLeft right";
  }
`;

function Home() {
  return (
    <StyledWrapper>
      <StyledBuffer />
      <StyledImgTitle>
        <StyledTopLeft>
          <StyledTitle>Je m'appelle Alexis</StyledTitle>
          <StyledSubtitle>Développeur Web</StyledSubtitle>
        </StyledTopLeft>
        <StyledRight>
          <StyledImg src={Portrait} />
        </StyledRight>

        <StyledP className="middle-left">
          Bienvenu sur mon site, il permet de me présenter et c'est aussi le
          projet final de ma formation
        </StyledP>
        <Socials class="bottom-left" />
      </StyledImgTitle>
    </StyledWrapper>
  );
}

export default Home;

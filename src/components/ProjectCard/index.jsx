import styled from "styled-components";
import colors from "../../utils/style/colors";
import Slideshow from "../Slideshow";

function ProjectCard(props) {
  const idForModal = props.cardId;
  return (
    <StyledCard>
      <StyledTitle>{props.title}</StyledTitle>
      <div className="container">
        <StyledImg src={props.list[0]} alt="Photo" className="image" />
        <div className="overlay">
          <button
            onClick={() => document.querySelector("#" + idForModal).showModal()}
            className="button_dialog"
          >
            Afficher la fenêtre
          </button>
        </div>
      </div>

      <StyledDialog id={idForModal}>
        <Slideshow picture={props.list} />
        <StyledDescWrapper>
          <StyledList>
            <li>{props.tech[0]}</li>
            <li>{props.tech[1]}</li>
            <li>{props.tech[2]}</li>
          </StyledList>
          <StyledText>{props.text}</StyledText>
        </StyledDescWrapper>
        <StyledDivButton>
          <div></div>
          <button
            autoFocus
            onClick={() => document.querySelector("#" + idForModal).close()}
            className="button_dialog_close"
          >
            Fermer
          </button>
          <div></div>
        </StyledDivButton>
      </StyledDialog>
    </StyledCard>
  );
}

export default ProjectCard;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 25px 15px 1px 15px;
  border-radius: 8px;
  .container {
    position: relative;
  }

  .image {
    display: block;
    height: auto;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: 0.5s ease;
  }

  .container:hover .overlay {
    width: 100%;
    backdrop-filter: blur(8px);
  }

  .button_dialog {
    white-space: nowrap;
    cursor: pointer;
    padding: 16px 32px;
    border: none;
    border-radius: 50px;
    color: ${colors.text_color};
    background-image: linear-gradient(
      to right,
      ${colors.secondary_background} 0%,
      ${colors.highlight} 51%,
      ${colors.secondary_background} 100%
    );
    background-size: 200%;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transition: 0.4s;
    &:hover {
      background-position: -100%;
    }
  }

  .button_dialog_close {
    cursor: pointer;
    white-space: nowrap;
    width: fit-content;
    padding: 12px 24px;
    border: none;
    border-radius: 50px;
    color: ${colors.text_color};
    background-image: linear-gradient(
      to right,
      ${colors.secondary_background} 0%,
      ${colors.highlight} 51%,
      ${colors.secondary_background} 100%
    );
    background-size: 200%;
    font-size: 16px;
    font-weight: 700;
    text-justify: center;
    transition: 0.4s;
    &:hover {
      background-position: -100%;
    }
  }
`;

const StyledDivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0px;
`;

const StyledText = styled.p`
  text-align: justify;
  padding: 8px 16px;
  overflow: auto;
`;

const StyledDialog = styled.dialog`
  width: 90%;
  padding: 0;
  border: 4px solid ${colors.highlight};
  border-radius: 16px;
  @media (min-width: 790px) {
    max-width: 700px;
  }
`;

const StyledTitle = styled.h3`
  margin: 0 0 16px 0;
`;

const StyledDescWrapper = styled.div``;

const StyledList = styled.ul`
  list-style: none;
  color: ${colors.text_color};
  background-color: ${colors.highlight};
  padding: 16px 16px;
  font-size: 18px;
  li {
    padding: 8px 0px;
    @media (max-width: 380px) {
      padding: 4px 0;
    }
  }
`;

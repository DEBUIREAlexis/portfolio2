import styled from "styled-components";
import colors from "../../utils/style/colors";
import Slideshow from "../Slideshow";

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
    background-color: ${colors.secondary_background};
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: 0.5s ease;
  }

  .container:hover .overlay {
    width: 100%;
  }

  .text {
    white-space: nowrap;
    color: white;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;

const StyledText = styled.p`
  text-align: justify;
`;

const StyledDialog = styled.dialog``;

const StyledTitle = styled.h3`
  margin: 0 0 16px 0;
`;

const StyledDescWrapper = styled.div``;

const StyledList = styled.ul``;

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
            className="text"
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

        <button
          autoFocus
          onClick={() => document.querySelector("#" + idForModal).close()}
        >
          Fermer
        </button>
      </StyledDialog>
    </StyledCard>
  );
}

export default ProjectCard;

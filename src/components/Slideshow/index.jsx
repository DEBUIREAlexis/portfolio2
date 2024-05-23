import styled from "styled-components";
import colors from "../../utils/style/colors";

import { useState } from "react";
import vector_right from "../../assets/vector_right.svg";
import vector_left from "../../assets/vector_left.svg";

const StyledCarousel = styled.div`
  height: 415px;
  width: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  p {
    color: ${colors.background};
    align-self: end;
  }
  .not-display-arrow {
    display: none;
  }
  .not-display-number {
    display: none;
  }
  @media (max-width: 800px) {
    height: 255px;
    border-radius: 10px;
    p {
      display: none;
    }
  }
`;

const StyledIcon = styled.img`
  background-color: ${colors.highlight};
  padding: 6px 4px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 32px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 400ms;
  transform: rotate(${({ rotate }) => rotate});
  margin: 0 30px;
  @media (max-width: 800px) {
    height: 24px;
    margin: 10px;
  }
`;

function Slideshow(pictures) {
  const [currentImg, setCurrentImg] = useState(0);
  let moreThanOneImage = "not-display-arrow";
  let notDisplayNumber = "not-display-number";
  if (pictures.picture.length > 1) {
    moreThanOneImage = "display-arrow";
    notDisplayNumber = "display-number";
  }
  return (
    <StyledCarousel
      style={{ backgroundImage: `url(${pictures.picture[currentImg]})` }}
    >
      <StyledIcon
        src={vector_left}
        onClick={() => checkOutOfBound(-1)}
        className={moreThanOneImage}
      />
      <p className={notDisplayNumber}>
        {currentImg + 1}/{pictures.picture.length}
      </p>
      <StyledIcon
        src={vector_right}
        onClick={() => checkOutOfBound(+1)}
        className={moreThanOneImage}
      />
    </StyledCarousel>
  );
  function checkOutOfBound(changeValue) {
    if (changeValue > 0) {
      if (changeValue + currentImg > pictures.picture.length - 1) {
        setCurrentImg(0);
      } else {
        setCurrentImg(changeValue + currentImg);
      }
    } else {
      if (changeValue + currentImg < 0) {
        setCurrentImg(pictures.picture.length - 1);
      } else {
        setCurrentImg(currentImg + changeValue);
      }
    }
  }
}

export default Slideshow;

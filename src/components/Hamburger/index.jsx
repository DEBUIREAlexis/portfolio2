import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledBurgerWrap = styled.div`
  width: 2rem;
  height: 2rem;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;

  @media (max-width: 767px) {
    display: flex;
    top: 10px;
    left: 10px;
    z-index: 10;
  }

  .burger {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${colors.text_color};
    transform-origin: 1px;
    transition: all 0.3s linear;
    transform: rotate(0);
    transform: translateX(0);
  }

  .burger1 {
    transform: rotate(45deg);
  }

  .burger2 {
    opacity: 0;
    transform: translateX(-100%);
  }
  .burger3 {
    transform: rotate(-45deg);
  }
`;

function Hamburger({ isOpen }) {
  return (
    <StyledBurgerWrap className="hamburger">
      <div className={isOpen ? "burger burger1" : "burger"}></div>
      <div className={isOpen ? "burger burger2" : "burger"}></div>
      <div className={isOpen ? "burger burger3" : "burger"}></div>
    </StyledBurgerWrap>
  );
}

export default Hamburger;

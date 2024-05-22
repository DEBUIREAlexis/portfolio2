import { useState } from "react";
import colors from "../../utils/style/colors";
import styled from "styled-components";
import NavigationLink from "../NavLink";
import Hamburger from "../Hamburger";

function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <StyledNav>
      <ul className={hamburgerOpen ? "open-burg" : ""}>
        <li>
          <NavigationLink to="#project" title="Mes projets"></NavigationLink>
        </li>
        <li>
          <NavigationLink to="#skill" title="Mes compétences"></NavigationLink>
        </li>
        <li>
          <NavigationLink to="#contact" title="Me contacter"></NavigationLink>
        </li>
      </ul>
      <div onClick={toggleHamburger} className="hamburger burger-padding">
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </StyledNav>
  );
}

export default NavBar;

const StyledNav = styled.nav`
  display: flex;
  margin-right: 12px;
  align-items: center;
  gap: 10px;
  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 24px;
    margin: 24px 16px;
  }

  a:hover {
    text-decoration: underline;
  }

  .active {
    font-weight: 800;
  }

  .hamburger {
    z-index: 8;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    gap: 10px;
  }

  @media (max-width: 767px) {
    ul {
      background-color: ${colors.secondary_background};
      transform-origin: top;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      left: 0;
      top: 0;
      right: 0;
      position: absolute;
      padding: 0;
      z-index: 5;
      transition: all 0.3s linear;
      transform: RotateX(-90deg);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .open-burg {
      display: flex;
      flex-direction: column;
      transform-origin: top;
      transition: all 0.3s linear;
      transform: RotateX(0deg);
      padding: 24px;

      li {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

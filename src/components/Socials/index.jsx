import styled from "styled-components";
import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledSocialWrap = styled.div`
  display: flex;
  align-self: center;
  gap: 16px;
  a {
    color: ${colors.secondary_background};
    border: 2px solid ${colors.secondary_background};
    padding: 6px 8px;
    border-radius: 50%;
    transition: all 0.2s linear;

    &:hover {
      color: ${colors.highlight};
      border: 2px solid ${colors.highlight};
      transition: all 0.2s linear;
      transform-origin: center;
      background-color: ${colors.text_color};
    }
  }

  .social-icone {
    height: 24px;
  }
`;

function Socials() {
  return (
    <StyledSocialWrap>
      <a href="https://www.linkedin.com/in/alexis-debuire-b94aa110a">
        <FontAwesomeIcon icon={faLinkedin} className="social-icone" />
      </a>
      <a href="https://github.com/DEBUIREAlexis">
        <FontAwesomeIcon icon={faGithub} className="social-icone" />
      </a>
      <a href="https://www.instagram.com/alexisdebuire?igsh=Y3l1czRjaWM3MTMw">
        <FontAwesomeIcon icon={faInstagram} className="social-icone" />
      </a>
    </StyledSocialWrap>
  );
}

export default Socials;

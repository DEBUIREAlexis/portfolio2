import styled from "styled-components";
import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function GoTopPage() {
  return (
    <StyledTopPage>
      <a href="#header">
        <StyledIcon icon={faArrowUp} />
      </a>
    </StyledTopPage>
  );
}

export default GoTopPage;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const StyledTopPage = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  bottom: 24px;
  right: 24px;
  z-index: 99;
  border-radius: 50%;
  border: 2px solid ${colors.text_color};
  color: ${colors.text_color};
  a {
    color: ${colors.text_color};
    cursor: pointer;
  }
`;

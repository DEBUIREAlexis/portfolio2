import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StyledInfo(props) {
  const alternateTxt = props.title + " logo";
  return (
    <StyledWrapper>
      <StyledLogoHolder>
        <StyledLogo icon={props.logo} className={alternateTxt} />
      </StyledLogoHolder>

      <StyledNameandInfo>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledText>{props.text}</StyledText>
      </StyledNameandInfo>
    </StyledWrapper>
  );
}

export default StyledInfo;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (min-width: 400px) {
    gap: 24px;
  }
`;

const StyledLogoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  margin-left: 8px;
  border-radius: 50%;
  border-radius: 50%;
  background: linear-gradient(180deg, #8750f7 0%, #1a102d 100%);
`;

const StyledLogo = styled(FontAwesomeIcon)`
  height: 24px;
`;

const StyledNameandInfo = styled.div``;

const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
`;

const StyledText = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

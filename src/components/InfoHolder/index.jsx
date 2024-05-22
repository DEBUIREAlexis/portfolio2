import styled from "styled-components";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import StyledInfo from "../SingleInfo";

function InfoHolder() {
  return (
    <StyledHolder>
      <StyledInfo
        logo={faPhoneVolume}
        title="Téléphone"
        text="06 75 90 23 47"
      />
      <StyledInfo
        logo={faEnvelope}
        title="Mail"
        text="alexisdebuire@gmail.com"
      />
      <StyledInfo
        logo={faLocationDot}
        title="Adresse"
        text="Haute-Savoie, France"
      />
    </StyledHolder>
  );
}

export default InfoHolder;
const StyledHolder = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

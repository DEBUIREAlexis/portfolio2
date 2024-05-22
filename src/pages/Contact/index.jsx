import styled from "styled-components";
import colors from "../../utils/style/colors";
import ContactForm from "../../components/ContactForm";
import InfoHolder from "../../components/InfoHolder";

const StyledWrapper = styled.div`
  background-color: ${colors.highlight};

  width: 100%;
  box-sizing: border-box;
  padding: 60px 40px 30px 40px;
  display: flex;
  flex-direction: column;

  align-items: center;
  @media (max-width: 400px) {
    padding: 60px 20px 30px 20px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 32px;
  letter-spacing: 1px;
  margin: 0;
  background: linear-gradient(
    to right,
    ${colors.secondary_background} 0%,
    ${colors.text_color} 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const StyledInfoAndForm = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column-reverse;
`;

function Contact() {
  return (
    <StyledWrapper id="contact">
      <StyledTitle>Me contacter</StyledTitle>

      <StyledInfoAndForm>
        <ContactForm />
        <InfoHolder />
      </StyledInfoAndForm>
    </StyledWrapper>
  );
}

export default Contact;

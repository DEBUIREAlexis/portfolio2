import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledDivMain = styled.div`
  display: flex;
  min-width: 100%;
  box-sizing: border-box;

  .img-holder {
    background-color: ${colors.primary};
    padding: 16px;
    max-height: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 32px 0;
  }
`;

const StyledForm = styled.div`
background-color: rgba(0,0,0,0.2);
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
padding:32px 8px;
min-width: 100%;
box-sizing: border-box;
  .field-pair {
    
border-radius: 15px;
display: flex;
flex-direction: column;
gap:16px;
  }

  input{
    background-color: ${colors.secondary};
    font-size: 16px;
    box-sizing: border-box;
    color: ${colors.text_color};
    line-height: 1;
    border-radius: 8px;
    border: 1px solid #22272c;
    padding: 14px 20px;
    outline: none;
    transition: all 0.3s 0s ease-out;
    font-family: roboto;

    &:focus{
      border: 1px solid ${colors.secondary_background};
    }
  }


  form {
    display: flex;
    flex-direction: column;
gap: 16px;

  }

  textarea {
    background-color: ${colors.secondary};
    font-size: 16px; 
    color: ${colors.text_color};
    padding: 14px 20px;
    border-radius: 8px;
    border: 1px solid #22272c;
    outline: none;
    transition: all 0.3s 0s ease-out;
    resize: none;
    height: 200px;
    font-family: roboto;
    
    &:focus{
      border: 1px solid ${colors.secondary_background};
    }
  }


  .submit-btn {
    cursor: pointer;
    text-decoration: none;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
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
    font-size: 16px;
    font-weight: 700;
    text-justify: center;
    transition: 0.4s;
    &:hover {
      background-position: -100%;
    }
  }

  }
`;

function ContactForm() {
  return (
    <StyledDivMain>
      <StyledForm>
        <form
          action="mailto:seawolf744@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="field-pair">
            <input type="text" placeholder="Nom"></input>

            <input type="text" placeholder="Prénom"></input>
          </div>

          <div className="field-pair">
            <input type="mail" placeholder="Adresse mail"></input>
          </div>
          <div className="field-pair">
            <textarea maxLength={500} placeholder="Votre message"></textarea>
          </div>

          <input type="submit" value="Envoyer" className="submit-btn"></input>
        </form>
      </StyledForm>
    </StyledDivMain>
  );
}

export default ContactForm;

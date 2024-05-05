import styled from "styled-components";

import colors from "../../utils/style/colors.jsx";

const StyledNavLink = styled.a`
  color: ${colors.text_color};
`;

function NavigationLink({ to, title }) {
  return (
    <StyledNavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {title}
    </StyledNavLink>
  );
}

export default NavigationLink;

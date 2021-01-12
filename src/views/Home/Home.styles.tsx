import styled from "styled-components";

import theme from "../../styles/theme";

export const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 30px;
`;

export const HomeHeader = styled.h1`
  font: ${theme.font.bigText};
`;

export const RedirectButton = styled.button`
  height: 50px;
  width: 150px;
  margin-top: 50px;
  color: ${theme.color.white};
  border: none;
  background-color: ${theme.color.red};
  transition: all 200ms ease-in-out;
  font: ${theme.font.mediumText};
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.redHover};
  }
`;

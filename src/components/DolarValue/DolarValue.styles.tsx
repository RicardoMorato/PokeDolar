import styled from "styled-components";

import theme from "../../styles/theme";

export const DolarContainer = styled.div`
  width: 450px;
  height: 100%;
  background-color: ${theme.color.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const SectionHeader = styled.h2`
  font: ${theme.font.bigText};
`;

export const InfoContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionMainText = styled.p`
  font: ${theme.font.mediumText};
`;

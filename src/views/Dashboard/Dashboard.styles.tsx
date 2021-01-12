import styled from "styled-components";

import theme from "../../styles/theme";

export const DashboardSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const PokedexContainer = styled.main`
  width: 550px;
  height: 100%;
  background-color: ${theme.color.red};
`;

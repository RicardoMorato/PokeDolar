import React from "react";

import {
  DashboardSection,
  DolarContainer,
  PokedexContainer,
} from "./Dashboard.styles";

const Dashboard: React.FC = () => {
  return (
    <DashboardSection>
      <DolarContainer>
        <p>Dólar hoje: R$1,25</p>
      </DolarContainer>

      <PokedexContainer>
        <p>Name: Pikachu</p>
        <p>Type: Electric</p>
      </PokedexContainer>
    </DashboardSection>
  );
};

export default Dashboard;

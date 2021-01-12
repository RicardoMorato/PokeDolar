import React from "react";

import { DashboardSection, PokedexContainer } from "./Dashboard.styles";
import { DolarValue } from "../../components";

const Dashboard: React.FC = () => {
  return (
    <DashboardSection>
      <DolarValue />

      <PokedexContainer>
        <p>Name: Pikachu</p>
        <p>Type: Electric</p>
      </PokedexContainer>
    </DashboardSection>
  );
};

export default Dashboard;

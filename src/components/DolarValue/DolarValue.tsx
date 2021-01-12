import React from "react";

import {
  DolarContainer,
  SectionHeader,
  SectionMainText,
  InfoContainer,
} from "./DolarValue.styles";

const DolarValue: React.FC = () => {
  return (
    <DolarContainer>
      <InfoContainer>
        <SectionHeader>Valor do dólar hoje</SectionHeader>

        <SectionMainText>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(5.4896)}
        </SectionMainText>
      </InfoContainer>

      <InfoContainer>
        <SectionHeader>Número do Pokémon</SectionHeader>
        <SectionMainText>{(5.4896 * 100).toFixed(0)}</SectionMainText>
      </InfoContainer>
    </DolarContainer>
  );
};

export default DolarValue;

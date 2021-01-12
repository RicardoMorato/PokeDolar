import React from "react";

import {
  PokemonContainer,
  InfoContainer,
  SectionHeader,
  SectionMainText,
  PokemonImg,
} from "./PokemonInfo.styles";
import { IPokemonInfo } from "./PokemonInfo.signature";

const PokemonInfo: React.FC<IPokemonInfo> = ({
  pokemonNumber,
  pokemonName,
  pokemonType,
  pokemonBaseExp,
  pokemonImg,
}) => {
  return (
    <PokemonContainer>
      <SectionHeader>Pokemon com o número {pokemonNumber}</SectionHeader>

      <InfoContainer>
        <SectionMainText>Nome: {pokemonName}</SectionMainText>
        <SectionMainText>Tipo: {pokemonType}</SectionMainText>
        <SectionMainText>
          Experiência base nos jogos: {pokemonBaseExp}
        </SectionMainText>
        <PokemonImg src={pokemonImg} />
      </InfoContainer>
    </PokemonContainer>
  );
};

export default PokemonInfo;

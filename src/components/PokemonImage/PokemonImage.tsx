import React from "react";

import {
  PokemonContainer,
  InfoContainer,
  SectionHeader,
  SectionMainText,
  PokemonImg,
} from "./PokemonImage.styles";
import { IPokemonImage } from "./PokemonImage.signature";

const PokemonImage: React.FC<IPokemonImage> = ({
  pokemonNumber,
  pokemonName,
  pokemonType,
  pokemonBaseExp,
  pokemonImg,
}) => {
  return (
    <PokemonContainer>
      <InfoContainer>
        <SectionHeader>Pokemon com o número {pokemonNumber}</SectionHeader>

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

export default PokemonImage;

import React from "react";

import { DashboardSection, PokedexContainer } from "./Dashboard.styles";
import { DolarValue, PokemonImage } from "../../components";

const Dashboard: React.FC = () => {
  return (
    <DashboardSection>
      <DolarValue />

      <PokedexContainer>
        <PokemonImage
          pokemonNumber={512}
          pokemonName="simisage"
          pokemonType="grass"
          pokemonBaseExp={174}
          pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
        />
      </PokedexContainer>
    </DashboardSection>
  );
};

export default Dashboard;

import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";

import { DashboardSection, PokedexContainer } from "./Dashboard.styles";
import { PokemonInfo } from "../../components";
import { Props } from "./Dashboard.signature";

const Dashboard: React.FC<Props> = ({ match }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonBaseExp, setPokemonBaseExp] = useState(0);
  const [pokemonImg, setPokemonImg] = useState("");

  const { pokemonId } = match.params;

  const handlePokemonInfo = useCallback(async () => {
    const apiResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );

    setPokemonName(apiResponse.data.name);
    setPokemonType(apiResponse.data.types[0].type.name);
    setPokemonBaseExp(apiResponse.data.base_experience);
    setPokemonImg(
      apiResponse.data.sprites.other["official-artwork"]["front_default"]
    );
  }, [pokemonId]);

  useEffect(() => {
    handlePokemonInfo();
  }, [handlePokemonInfo]);

  return (
    <DashboardSection>
      <PokedexContainer>
        <PokemonInfo
          pokemonNumber={Number(pokemonId)}
          pokemonName={pokemonName}
          pokemonType={pokemonType}
          pokemonBaseExp={pokemonBaseExp}
          pokemonImg={pokemonImg}
        />
      </PokedexContainer>
    </DashboardSection>
  );
};

export default Dashboard;

import React from "react";
import { useHistory } from "react-router";

import { HomeSection, HomeHeader, RedirectButton } from "./Home.styles";

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    const randomNumber = Number((Math.random() * 1000).toFixed(0));
    if (randomNumber < 899) return history.push(`/${randomNumber}`);

    history.push("/1");
  };

  return (
    <HomeSection>
      <HomeHeader>
        Clique no botão e seja redirecionade para um pokemon aleatório
      </HomeHeader>

      <RedirectButton onClick={handleClick}>Clica aqui!</RedirectButton>
    </HomeSection>
  );
};

export default Home;

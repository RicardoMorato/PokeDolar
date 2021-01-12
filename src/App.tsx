import React from "react";
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from "./styles/global";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;

import React, { Component }from "react"
import { Conteiner } from "./components/styles";

import Table from "./components/table";


function App() {
  return (
    <Conteiner>
        <h1>Transferencias</h1>
        <Conteiner>
          <Table />        
        </Conteiner>
      </Conteiner>
  );
}

export default App;

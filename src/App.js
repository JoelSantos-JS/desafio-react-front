import React, { Component }from "react"
import { Conteiner } from "./components/styles";

import Table from "./components/table";


function App() {
  return (
    <Conteiner>
        <h1 style={{textAlign: "center"}}> Sistema de Transferencias</h1>
        <Conteiner>
          <Table />        
        </Conteiner>
      </Conteiner>
  );
}

export default App;

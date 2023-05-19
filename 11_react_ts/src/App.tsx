import React from "react";

// 4 - importando componente

import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destruturing from "./components/Destruturing";

function App() {
  // 1 - variaveis
  const name: string = "matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className="App">
      <h1>TypeScript com react</h1>
      <h2>Nome: {name}</h2>
      <p>idade: {age}</p>
      {isWorking && <p>esta trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="segundo" />
      <Destruturing
        title="Primeiro post"
        content="Algum conteúdo"
        commentQty={10}
        tags={["ts", 'js']}
      />
    </div>
  );
}

export default App;

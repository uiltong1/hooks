import React, { useState } from "react";

const HookUseReducer = () => {
  let name = "Teste";
  const [stateName, setStateName] = useState("Marcelo");

  const handleNames = () => {
    name = "Junior";
    setStateName("João Gomes");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(stateName);
  };

  return (
    <div>
      <h1>useState</h1>
      <p>Nome variavel: {name}</p>
      <p>Nome hook: {stateName}</p>
      <button onClick={handleNames}>Mudar nomes!</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <hr />
    </div>
  );
};

export default HookUseReducer;

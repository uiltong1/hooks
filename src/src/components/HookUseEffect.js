import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [number, setNumber] = useState(1);
  const [anotherNumer, setAnotherNumber] = useState(0);

  /* Toda vez que renderiza */
  useEffect(() => {
    console.log("Foooooi");
  });

  /* Somente é executado uma vez */
  useEffect(() => {
    console.log("Uma vez");
  }, []);

  /*Fica observando se há mudança no estado que é passado como dependencia */
  useEffect(() => {
    if (anotherNumer > 0) {
      console.log("Estado modificado");
    }
  }, [anotherNumer]);

  /* Cleanup useEffect */
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnotherNumber(anotherNumer + 1);
    }, 2000);

    clearInterval(timer);
  }, [anotherNumer]);

  return (
    <div>
      <h1>useEffect</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Mudar o numero</button>
      <p>{anotherNumer}</p>
      <button onClick={() => setAnotherNumber(anotherNumer + 1)}>
        Mudar segundo valor
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;

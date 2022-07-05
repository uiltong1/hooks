import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookUseCustom = () => {
  const [number, setNumber] = useState(0);
  const numberOld = usePrevious(number);

  return (
    <div>
      <h1>useCustom</h1>
      <p>Novo numero: {number}</p>
      <p>Antigo numero: {numberOld}</p>
      <button onClick={(e) => setNumber(Math.random())}>
        Numero aleatorio
      </button>
    </div>
  );
};

export default HookUseCustom;

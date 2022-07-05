import React, { useMemo, useState } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  /* Utilizado para que a variavel não fique recarregando quando a pagina renderiza */
  const premiumNumber = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  return (
    <div>
      <h1>useMemo</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {premiumNumber.includes(number) ? <p>Acertou mizeraviiii</p> : ""}
    </div>
  );
};

export default HookUseMemo;

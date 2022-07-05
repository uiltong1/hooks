import React, { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [number, setNumber] = useState(0);
  const [numberb, setNumberb] = useState(0);

  const textRef = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");
    textRef.current.focus();
  };

  return (
    <div>
      <h1>useRef</h1>
      <p>Valor de referencia: {numberRef.current}</p>
      <p>Valor Numero A: {number}</p>
      <p>Valor Numero B: {numberb}</p>
      <button onClick={() => setNumber(number + 1)}>Mudar A</button>
      <button onClick={() => setNumberb(numberb + 1)}>Mudar B</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textRef}
        />
        <button type="submit">Enviar</button>
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;

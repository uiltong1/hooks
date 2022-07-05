import React, { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h1>HookUseImperativeHandle</h1>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validar</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;

import React, { useEffect, useLayoutEffect } from "react";

const HookUseLayoutEffect = () => {
  useEffect(() => {
    console.log("use Effect");
  });

  /* useLayoutEffect executa primeiro que tudo */
  useLayoutEffect(() => {
    console.log("use layout effect");
  });

  return (
    <div>
      HookUseLayoutEffect
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;

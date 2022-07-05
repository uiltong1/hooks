import React, { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>About</h1>
      <p>{contextValue}</p>
    </div>
  );
};

export default About;

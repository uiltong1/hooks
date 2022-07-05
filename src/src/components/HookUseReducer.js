import React, { useReducer, useState } from "react";

const HookUseState = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const [task, setTask] = useState("");

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: task,
        };

        setTask("");
        return [...state, newTask];
      case "REMOVE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const initialTask = [
    { id: 1, text: "Minha tarefa 1" },
    { id: 2, text: "Minha tarefa 2" },
  ];

  const [tasks, dispatchTask] = useReducer(taskReducer, initialTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTask({ type: "ADD" });
  };

  const handleRemove = (id) => {
    dispatchTask({ type: "REMOVE", id: id });
  };

  return (
    <div>
      <h1>useReducer</h1>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Mudar numero</button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id} onDoubleClick={() => handleRemove(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <hr />
    </div>
  );
};

export default HookUseState;

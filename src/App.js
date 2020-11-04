import "./App.css";
import styled from "styled-components";

import { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "done", isDone: true },
    { id: 2, content: "not done", isDone: false },
  ]);
  const [value, setValue] = useState("");
  const id = useRef(3);

  const handleButtonClick = () => {
    setTodos([
      {
        id: id.current,
        content: value,
      },
      ...todos,
    ]);
    setValue("");
    id.current++;
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      {/* ref 存取 DOM 元素 */}
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Add Todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleIsDone={handleToggleIsDone}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
}

export default App;

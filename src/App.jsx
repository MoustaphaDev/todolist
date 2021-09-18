import React from "react";
import { useState } from "react";
import InputBox from "./components/inputBox/inputBox";
import Items from "./components/items/items";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div className="layout">
      <Header />
      <InputBox handleStateChange={addTodo} />
      <Items tasks={todoList} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>this is the todolist</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add a todo</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
};

export default Todolist;

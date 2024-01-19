import { useState, useEffect } from "react";
import styled from "styled-components";
import { EditTodo } from "./EditTodo";

const Card = styled.table`
  position: relative;
  margin-top: 3rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem;
  width: 420px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
`;

const TableHead = styled.th`
font-size: 14px;
`

const DeleteButton = styled.button`
cursor:pointer;
background-color: black;
color:white;
margin-left: 0.2rem;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 10px;
font-weight: bold;
`

export const NewListSubmissions = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
        <Card>
        <thead>
          <tr>
            <TableHead>Detail</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </tr>
        </thead>
        <tbody>
      {todos.map((todo) => (
          <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo={todo}/></td>
            <td><DeleteButton onClick={()=> deleteTodo(todo.todo_id)}>Delete</DeleteButton></td>
          </tr>
      ))}
        </tbody>
      </Card>
    </div>
  );
};

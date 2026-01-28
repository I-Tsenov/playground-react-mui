import { useState } from "react";
import { Container, Stack } from "@mui/material";
import Hero from "./components/Hero";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import { MainWrapper } from "./styles";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <MainWrapper>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Hero />
          <TaskForm input={input} setInput={setInput} onAddTask={addTodo} />
          <TaskStats todos={todos} />
          <TaskList
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        </Stack>
      </Container>
    </MainWrapper>
  );
};

export default Home;

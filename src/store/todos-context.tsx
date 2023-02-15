import React, { useState } from "react";

import Todo from "../models/todo";

type TodoObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

type Props = {
  children?: React.ReactNode;
};

const TodosContextProvider = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text)]);
  };

  const deleteTodo = (idTodo: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== idTodo);
    });
  };
  const contextValue: TodoObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

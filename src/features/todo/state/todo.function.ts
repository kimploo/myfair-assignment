import { SetterOrUpdater } from "recoil";

import { Todo, TodoStatus } from "../types/todo.type";

export const setStatus = (
  todos: Todo[],
  id: string,
  setter: SetterOrUpdater<Todo[]>,
  status: TodoStatus,
) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  setter([
    ...todos.slice(0, idx),
    {
      ...todos[idx],
      status,
    },
    ...todos.slice(idx + 1),
  ]);
};

export const updateTodo = (
  todos: Todo[],
  newTodo: Todo,
  setter: SetterOrUpdater<Todo[]>,
) => {
  const idx = todos.findIndex((todo) => todo.id === newTodo.id);
  setter([...todos.slice(0, idx), newTodo, ...todos.slice(idx + 1)]);
};

import { SetterOrUpdater } from "recoil";

import { Todo, TodoStatus } from "../types/todo.type";

export const setStatus = (
  id: string,
  setter: SetterOrUpdater<Todo[]>,
  status: TodoStatus,
) => {
  setter((todos) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    return [
      ...todos.slice(0, idx),
      {
        ...todos[idx],
        status,
      },
      ...todos.slice(idx + 1),
    ];
  });
};

export const setCanEdit = (
  id: string,
  setter: SetterOrUpdater<Todo[]>,
  status: TodoStatus,
) => {
  setter((todos) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    return [
      ...todos.slice(0, idx),
      {
        ...todos[idx],
        status,
      },
      ...todos.slice(idx + 1),
    ];
  });
};

export const updateTodo = (newTodo: Todo, setter: SetterOrUpdater<Todo[]>) => {
  setter((todos) => {
    const idx = todos.findIndex((todo) => todo.id === newTodo.id);
    return [...todos.slice(0, idx), newTodo, ...todos.slice(idx + 1)];
  });
};

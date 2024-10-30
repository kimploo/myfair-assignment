import { SetterOrUpdater } from "recoil";

import { NewTodo, NewTodoStatus } from "../types/todo.type";

export const setStatus = (
  id: string,
  setter: SetterOrUpdater<NewTodo[]>,
  status: NewTodoStatus,
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
  setter: SetterOrUpdater<NewTodo[]>,
  canEdit: boolean,
) => {
  setter((todos) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    return [
      ...todos.slice(0, idx),
      {
        ...todos[idx],
        canEdit,
      },
      ...todos.slice(idx + 1),
    ];
  });
};

export const updateTodo = (
  newTodo: NewTodo,
  setter: SetterOrUpdater<NewTodo[]>,
) => {
  setter((todos) => {
    const idx = todos.findIndex((todo) => todo.id === newTodo.id);
    return [...todos.slice(0, idx), newTodo, ...todos.slice(idx + 1)];
  });
};

export const deleteTodo = (id: string, setter: SetterOrUpdater<NewTodo[]>) => {
  setter((todos) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    return [...todos.slice(0, idx), ...todos.slice(idx + 1)];
  });
};

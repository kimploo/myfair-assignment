import { atom } from "recoil";

import { dummyTodos } from "../../util/dummyData";

import { Todo } from "./todo.type";

export const todoState = atom<Todo[]>({
  key: "todoState",
  default: dummyTodos || [],
});

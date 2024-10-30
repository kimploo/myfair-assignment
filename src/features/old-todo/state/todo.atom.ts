import { atom } from "recoil";

import { dummyTodos } from "../../../util/dummyData";
import { Todo } from "../types/todo.type";

export const todoState = atom<Todo[]>({
  key: "oldTodoState",
  default: dummyTodos || [],
});

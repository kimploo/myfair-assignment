import { atom } from "recoil";

import { newDummy } from "../../../util/newDummy";
import { NavStatus, NewTodo } from "../types/todo.type";

export const newTodoState = atom<NewTodo[]>({
  key: "todoState",
  default: newDummy || [],
});

export const navState = atom<NavStatus>({
  key: "navState",
  default: "All",
});

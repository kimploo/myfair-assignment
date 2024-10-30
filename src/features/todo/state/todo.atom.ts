import { atom } from "recoil";

import { newDummy } from "../../../util/newDummy";
import { NewTodo } from "../types/todo.type";

export const newTodoState = atom<NewTodo[]>({
  key: "todoState",
  default: newDummy || [],
});

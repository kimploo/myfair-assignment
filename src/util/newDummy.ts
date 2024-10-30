import { v4 as uuid } from "uuid";

import { NewTodo } from "../features/todo/types/todo.type";

export const newDummy: NewTodo[] = [
  {
    id: uuid(),
    description: "출근하고 비타민 먹기",
    dueDate: "2024-11-01",
    status: "할 일",
    createdAt: "2024-10-27T00:00:00.000Z",
    canEdit: false,
  },
  {
    id: uuid(),
    description: "Daily Scrum 작성하기",
    dueDate: "2024-11-03",
    status: "할 일",
    createdAt: "2024-10-25T00:00:00.000Z",
    canEdit: false,
  },
  {
    id: uuid(),
    description: "주간회의 참여하기",
    dueDate: "2024-11-05",
    status: "할 일",
    createdAt: "2024-10-24T00:00:00.000Z",
    canEdit: false,
  },
];

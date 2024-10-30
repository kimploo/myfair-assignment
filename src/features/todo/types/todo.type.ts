export type NewTodoStatus = "할 일" | "완료";

export interface NewTodo {
  id: string;
  description: string;
  dueDate: string; // "YYYY-MM-DD" 형식
  status: NewTodoStatus;
  createdAt: string; // ISO 8601 형식
  canEdit: boolean;
}

export type NavStatus = "All" | "To do" | "Done";

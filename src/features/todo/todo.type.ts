export type TodoStatus = "할 일" | "진행 중" | "완료";

export interface Todo {
  id: string;
  description: string;
  dueDate: string; // "YYYY-MM-DD" 형식
  status: TodoStatus;
  createdAt: string; // ISO 8601 형식
  canEdit: boolean;
}

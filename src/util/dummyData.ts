import { nanoid } from "nanoid";

import { Todo } from "../features/todo/types/todo.type";

export const dummyTodos: Todo[] = [
  {
    id: nanoid(),
    description: "프로젝트 회의를 위한 자료 준비",
    dueDate: "2024-11-01",
    status: "할 일",
    createdAt: "2024-10-27T00:00:00.000Z",
    canEdit: false,
  },
  {
    id: nanoid(),
    description: "프로젝트 관련 서류를 부서에 제출",
    dueDate: "2024-11-03",
    status: "진행 중",
    createdAt: "2024-10-25T00:00:00.000Z",
    canEdit: false,
  },
  {
    id: nanoid(),
    description: "팀원들의 코드를 검토하고 피드백 작성",
    dueDate: "2024-11-05",
    status: "할 일",
    createdAt: "2024-10-24T00:00:00.000Z",
    canEdit: false,
  },
  {
    id: nanoid(),
    description: "주간 프로젝트 진행 상황 보고서 작성",
    dueDate: "2024-11-07",
    status: "할 일",
    createdAt: "2024-10-23T00:00:00.000Z",
    canEdit: false,
  },
  {
    id: nanoid(),
    description: "새로운 프로젝트 개발 환경 구성",
    dueDate: "2024-11-08",
    status: "완료",
    createdAt: "2024-10-22T00:00:00.000Z",
    canEdit: false,
  },
];

/** */

import styled from "@emotion/styled";

import { TodoStatus } from "../types/todo.type";

type Transform = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
};

export const TodoBase = styled.li<{
  isOver?: boolean;
  transform: Transform | null;
  status: TodoStatus;
}>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0.5rem;

  width: 100%;
  opacity: ${(props) => (props.transform ? 0.3 : 1)};
  transform: ${({ transform }) =>
    transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : ""};
  color: ${(props) => props.theme.colors.text};

  border-left: 4px solid
    ${({ status, theme }) =>
      status === "할 일"
        ? theme.colors.todo
        : status === "진행 중"
          ? theme.colors.inProgress
          : theme.colors.done};
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

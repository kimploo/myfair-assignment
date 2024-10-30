"use client";

import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { ReactNode } from "react";

import { TodoStatus } from "../types/todo.type";

interface Props {
  status: TodoStatus;
  children?: ReactNode;
}

export default function TodoStatusArea({ children, status }: Props) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <Container ref={setNodeRef} data-testid={status + "-section"}>
      <StatusWrapper>
        <Status status={status}>{status}</Status>
      </StatusWrapper>
      <TodosWrapper>{children}</TodosWrapper>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const StatusWrapper = styled.div`
  display: flex;

  padding: 0.5rem;
`;

const Status = styled.div<{ status: TodoStatus }>`
  padding: 0.25rem 0.7rem;
  border-radius: 1rem;
  background-color: ${({ status, theme }) => {
    return status === "할 일"
      ? theme.colors.todo
      : status === "진행 중"
        ? theme.colors.inProgress
        : theme.colors.done;
  }};
`;

const TodosWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);

  width: 100%;
  height: 100%;
  margin-top: 0.1rem;
  padding: 0.5rem;
`;

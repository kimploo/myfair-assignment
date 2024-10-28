"use client";

import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { ReactNode } from "react";

import { TodoStatus } from "../todo.type";

interface Props {
  status: TodoStatus;
  children: ReactNode;
}

export default function TodoStatusArea({ children, status }: Props) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <Container ref={setNodeRef}>
      <StatusWrapper>
        <Status status={status}>{status}</Status>
      </StatusWrapper>
      <TodoWrapper>{children}</TodoWrapper>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  border: 1px solid rgb(0, 0, 0, 0.5);
`;

const StatusWrapper = styled.div`
  display: flex;

  padding: 0.5rem;
`;

const Status = styled.div<{ status: TodoStatus }>`
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  background-color: ${({ status }) => {
    return status === "할 일"
      ? "rgb(227, 226, 224)"
      : status === "진행 중"
        ? "rgb(211, 229, 239)"
        : "rgb(219, 237, 219)";
  }};
`;

const TodoWrapper = styled.ul`
  padding: 0.5rem;
`;

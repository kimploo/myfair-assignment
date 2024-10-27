"use client";

import { DndContext, useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { ReactNode, useState } from "react";

import { TodoStatus } from "../todo.type";

const Container = styled.section`
  border: 1px solid rgb(0, 0, 0, 0.5);
`;

interface Props {
  status: TodoStatus;
  children: ReactNode;
}

export default function TodoStatusArea({ children, status }: Props) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return <Container ref={setNodeRef}>{children}</Container>;
}

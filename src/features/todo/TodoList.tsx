import { DndContext, DragEndEvent } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";

import TodoStatusArea from "./components/TodoStatusArea";
import CreateTodoButton from "./CreateTodoButton";
import { todoState } from "./state/todo.atom";
import { setStatus } from "./state/todo.function";
import Todo from "./Todo";
import { TodoStatus } from "./types/todo.type";

const TodoContainer = styled.div`
  display: flex;
  height: 1000px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const todoStatuses: TodoStatus[] = ["할 일", "진행 중", "완료"];

  function handleDragEnd(event: DragEndEvent) {
    const id = event.active.id as string;
    if (event.over && event.over.id === "할 일")
      return setStatus(todos, id, setTodos, "할 일");
    if (event.over && event.over.id === "진행 중")
      return setStatus(todos, id, setTodos, "진행 중");
    if (event.over && event.over.id === "완료")
      return setStatus(todos, id, setTodos, "완료");
  }

  return (
    <DndContext onDragEnd={(e) => handleDragEnd(e)}>
      <TodoContainer>
        {todoStatuses.map((status) => (
          <TodoStatusArea key={status} status={status}>
            {todos
              .filter((todo) => todo.status === status)
              .map((e) => (
                <Todo key={e.id} todo={e}></Todo>
              ))}
            <CreateTodoButton status={status} />
          </TodoStatusArea>
        ))}
      </TodoContainer>
    </DndContext>
  );
}

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";

import CreateTodoButton from "./CreateTodoButton";
import Todo from "./Items/Todo";
import TodoStatusArea from "./Items/TodoStatusArea";
import { todoState } from "./todo.atom";
import { Todo as ITodo, TodoStatus } from "./todo.type";

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

  const setStatus = (todos: ITodo[], idx: number, status: TodoStatus) => {
    setTodos([
      ...todos.slice(0, idx),
      {
        ...todos[idx],
        status,
      },
      ...todos.slice(idx + 1),
    ]);
  };

  function handleDragEnd(event: DragEndEvent) {
    const selectedIdx = todos.findIndex((todo) => todo.id === event.active.id);
    if (event.over && event.over.id === "할 일")
      return setStatus(todos, selectedIdx, "할 일");
    if (event.over && event.over.id === "진행 중")
      return setStatus(todos, selectedIdx, "진행 중");
    if (event.over && event.over.id === "완료")
      return setStatus(todos, selectedIdx, "완료");
  }

  return (
    <DndContext onDragEnd={(e) => handleDragEnd(e)}>
      <TodoContainer>
        {todoStatuses.map((status, i) => (
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

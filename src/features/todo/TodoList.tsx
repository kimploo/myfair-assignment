import { DndContext, DragEndEvent } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";

import Todo from "./Items/Todo";
import TodoStatusArea from "./Items/TodoStatusArea";
import { todoState } from "./todo.atom";
import { TodoStatus } from "./todo.type";

const TodoContainer = styled.div`
  display: flex;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;

  gap: 0.5rem;
`;

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const todoStatuses: TodoStatus[] = ["할 일", "진행 중", "완료"];
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
    console.log(event.active.data.current);
    const selectedIdx = todos.findIndex((todo) => todo.id === event.active.id);
    if (event.over && event.over.id === "할 일") {
      setTodos([
        ...todos.slice(0, selectedIdx),
        {
          ...todos[selectedIdx],
          status: "할 일",
        },
        ...todos.slice(selectedIdx + 1),
      ]);
    }
    if (event.over && event.over.id === "진행 중") {
      setTodos([
        ...todos.slice(0, selectedIdx),
        {
          ...todos[selectedIdx],
          status: "진행 중",
        },
        ...todos.slice(selectedIdx + 1),
      ]);
    }
    if (event.over && event.over.id === "완료") {
      setTodos([
        ...todos.slice(0, selectedIdx),
        {
          ...todos[selectedIdx],
          status: "완료",
        },
        ...todos.slice(selectedIdx + 1),
      ]);
    }
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
          </TodoStatusArea>
        ))}
      </TodoContainer>
    </DndContext>
  );
}

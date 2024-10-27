import { DndContext } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilValue } from "recoil";

import Todo from "./Items/Todo";
import TodoStatusArea from "./Items/TodoStatusArea";
import { todoState } from "./todo.atom";
import { TodoStatus } from "./todo.type";

const TodoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;

  gap: 0.5rem;
`;

export default function TodoList() {
  const todos = useRecoilValue(todoState);
  const todoStatuses: TodoStatus[] = ["할 일", "진행 중", "완료"];
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
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

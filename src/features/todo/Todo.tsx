import { useDraggable } from "@dnd-kit/core";
import styled from "@emotion/styled";

import { TodoBase } from "./asset/TodoBase";
import { Todo as ITodo } from "./todo.type";

interface Props {
  todo: ITodo;
}

export default function Todo({ todo }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: todo.id,
  });

  return (
    <Conatiner
      ref={setNodeRef}
      transform={transform}
      status={todo.status}
      {...listeners}
      {...attributes}
    >
      {todo.description}
      <DueDate>{todo.dueDate}</DueDate>
    </Conatiner>
  );
}

const Conatiner = TodoBase;

const DueDate = styled.span`
  font-size: 0.8rem;
`;

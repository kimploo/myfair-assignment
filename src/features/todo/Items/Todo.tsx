import { useDraggable, useDroppable } from "@dnd-kit/core";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Todo as ITodo } from "../todo.type";

interface Props {
  todo: ITodo;
}

type Transform = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
};

const Conatiner = styled.li<{ isOver?: boolean; transform: Transform | null }>`
  opacity: ${(props) => (props.transform ? 0.3 : 1)};
  transform: ${({ transform }) =>
    transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : ""};
`;

export default function Todo({ todo }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable" + todo.id,
  });

  return (
    <Conatiner
      ref={setNodeRef}
      transform={transform}
      {...listeners}
      {...attributes}
    >
      {todo.status}
      {todo.description}
    </Conatiner>
  );
}

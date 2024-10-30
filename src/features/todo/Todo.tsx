import { useDraggable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";

import Edit from "./asset/Edit";
import { TodoBase } from "./asset/TodoBase";
import X from "./asset/X";
import { todoState } from "./state/todo.atom";
import { deleteTodo, setCanEdit } from "./state/todo.function";
import { Todo as ITodo } from "./types/todo.type";
import UpdateTodo from "./UpdateTodo";

interface Props {
  todo: ITodo;
}

export default function Todo({ todo }: Props) {
  const setTodos = useSetRecoilState(todoState);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: todo.id,
  });

  return todo.canEdit ? (
    <UpdateTodo todo={todo} />
  ) : (
    <Conatiner
      ref={setNodeRef}
      transform={transform}
      status={todo.status}
      data-testid={"todo-" + todo.id}
      {...listeners}
      {...attributes}
    >
      <MainWrapper>
        <div>{todo.description}</div>
        <DueDate>{todo.dueDate}</DueDate>
      </MainWrapper>
      <ButtonWrapper onPointerDown={(e) => e.stopPropagation()}>
        <button
          data-testid={"update-button-" + todo.id}
          onClick={() => setCanEdit(todo.id, setTodos, true)}
        >
          <Edit />
        </button>
        <button
          data-testid={"delete-button-" + todo.id}
          onClick={() => deleteTodo(todo.id, setTodos)}
        >
          <X />
        </button>
      </ButtonWrapper>
    </Conatiner>
  );
}

const Conatiner = styled(TodoBase)`
  flex-direction: row;
  justify-content: space-between;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DueDate = styled.div`
  font-size: 0.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

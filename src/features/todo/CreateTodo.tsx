import styled from "@emotion/styled";
import { format } from "date-fns";
import { useSetRecoilState } from "recoil";
import { v4 as uuid } from "uuid";

import { TodoBase } from "./asset/TodoBase";
import { todoState } from "./state/todo.atom";
import { TodoStatus } from "./types/todo.type";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CreateTodoContainer = styled(TodoBase)`
  color: #999999;
  border-left: none;
`;

interface Props {
  status: TodoStatus;
}

export default function CreateTodo({ status }: Props) {
  const setTodo = useSetRecoilState(todoState);

  return (
    <Container>
      <button
        onClick={() =>
          setTodo((todos) => [
            ...todos,
            {
              id: uuid(),
              createdAt: new Date().toISOString(),
              description: "",
              dueDate: format(new Date(), "yyyy-MM-dd"),
              status,
              canEdit: true,
            },
          ])
        }
      >
        <CreateTodoContainer status={status} transform={null}>
          + New TODO
        </CreateTodoContainer>
      </button>
    </Container>
  );
}

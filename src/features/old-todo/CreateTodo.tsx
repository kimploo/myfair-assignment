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
        data-testid={"create-button-" + status}
        onClick={() =>
          setTodo((todos) => {
            const isMoreThan9 =
              todos.filter(
                (todo) => todo.status === "할 일" || todo.status === "진행 중",
              ).length > 9;

            if (isMoreThan9) {
              alert("'할 일', '진행 중'인 Todo가 10개를 넘을 수 없습니다.");
              return todos;
            } else {
              return [
                ...todos,
                {
                  id: uuid(),
                  createdAt: new Date().toISOString(),
                  description: "",
                  dueDate: format(new Date(), "yyyy-MM-dd"),
                  status,
                  canEdit: true,
                },
              ];
            }
          })
        }
      >
        <CreateTodoContainer status={status} transform={null}>
          + New TODO
        </CreateTodoContainer>
      </button>
    </Container>
  );
}

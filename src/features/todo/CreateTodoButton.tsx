import styled from "@emotion/styled";

import { TodoBase } from "./asset/TodoBase";
import { Todo, TodoStatus } from "./todo.type";

const Container = styled(TodoBase)`
  color: #999999;
  border-left: none;
`;

interface Props {
  status: TodoStatus;
}

export default function CreateTodoButton({ status }: Props) {
  return (
    <button>
      <Container status={status} transform={null}>
        + New page
      </Container>
    </button>
  );
}

import styled from "@emotion/styled";

import TodoCheckbox from "./components/TodoCheckbox";
import TodoX from "./components/TodoX";
import { NewTodo as INewTodo } from "./types/todo.type";

const Container = styled.li`
  display: flex;

  width: 100%;
  height: 96px;
  padding: 32px 16px 32px 16px;
  gap: 1rem;
`;

const TodoValue = styled.div`
  display: inline-flex;
  align-items: center;

  flex: 1 0 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

interface Props {
  todo: INewTodo;
}

export default function NewTodo({ todo }: Props) {
  return (
    <Container>
      <TodoCheckbox checked={todo.status === "완료"}></TodoCheckbox>
      <TodoValue>{todo.description}</TodoValue>
      <TodoX></TodoX>
    </Container>
  );
}

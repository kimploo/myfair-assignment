import styled from "@emotion/styled";

import TodoCheckbox from "./components/TodoCheckbox";
import TodoX from "./components/TodoX";

const Container = styled.li`
  display: flex;

  width: 100%;
  height: 96px;
  padding: 32px 16px 32px 16px;
  gap: 1rem;
`;

const TodoValue = styled.div`
  flex: 1 0 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export default function NewTodo() {
  return (
    <Container>
      <TodoCheckbox></TodoCheckbox>
      <TodoValue>hey</TodoValue>
      <TodoX></TodoX>
    </Container>
  );
}

/** */

import styled from "@emotion/styled";

import NewTodoCounter from "./components/TodoCounter";
import NewTodoList from "./TodoList";
import TodoNav from "./TodoNav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 737px;
  min-height: 484px;
  max-height: 70vh;
  padding: 32px;
  margin-top: 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colorsNew.paper};

  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.12);
`;

const TodoWrapper = styled.div`
  width: 100%;
  padding-top: 32px;
`;

export default function TodoPaper() {
  return (
    <Container>
      <TodoNav></TodoNav>
      <TodoWrapper>
        <NewTodoCounter></NewTodoCounter>
        <NewTodoList></NewTodoList>
      </TodoWrapper>
    </Container>
  );
}

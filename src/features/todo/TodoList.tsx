/** */

import styled from "@emotion/styled";

import NewTodo from "./Todo";

const Container = styled.ul`
  overflow-y: auto;
  width: 100%;
`;

export default function NewTodoList() {
  return (
    <Container>
      <NewTodo></NewTodo>
      <NewTodo></NewTodo>
      <NewTodo></NewTodo>
    </Container>
  );
}

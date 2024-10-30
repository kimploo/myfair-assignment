/** */

import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

import { newTodoState } from "./state/todo.atom";
import NewTodo from "./Todo";

const Container = styled.ul`
  overflow-y: auto;
  width: 100%;
`;

export default function NewTodoList() {
  const todos = useRecoilValue(newTodoState);

  return (
    <Container>
      {todos.map((todo) => (
        <NewTodo key={todo.id} todo={todo}></NewTodo>
      ))}
    </Container>
  );
}

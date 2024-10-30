/** */

import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

import NewTodoCounter from "./components/TodoCounter";
import { navState, newTodoState } from "./state/todo.atom";
import NewTodo from "./Todo";

const Container = styled.ul`
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 60px);
`;

export default function NewTodoList() {
  const rawTodos = useRecoilValue(newTodoState);
  const nav = useRecoilValue(navState);
  const todos = rawTodos.filter((todo) => {
    if (nav === "All") return true;
    if (nav === "To do") return todo.status === "할 일";
    if (nav === "Done") return todo.status === "완료";
  });

  return (
    <>
      <NewTodoCounter count={todos.length}></NewTodoCounter>
      <Container>
        {todos.map((todo) => (
          <NewTodo key={todo.id} todo={todo}></NewTodo>
        ))}
      </Container>
    </>
  );
}

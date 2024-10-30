import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";

import TodoCheckbox from "./components/TodoCheckbox";
import DeleteTodo from "./DeleteTodo";
import { newTodoState } from "./state/todo.atom";
import { deleteTodo, setStatus } from "./state/todo.function";
import { NewTodo as INewTodo, NewTodoStatus } from "./types/todo.type";

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
  const set = useSetRecoilState(newTodoState);
  const checked = todo.status === "완료";
  const newStatus: NewTodoStatus = todo.status === "완료" ? "할 일" : "완료";

  return (
    <Container>
      <TodoCheckbox
        checked={checked}
        fn={() => setStatus(todo.id, set, newStatus)}
      ></TodoCheckbox>
      <TodoValue>{todo.description}</TodoValue>
      <DeleteTodo fn={() => deleteTodo(todo.id, set)}></DeleteTodo>
    </Container>
  );
}

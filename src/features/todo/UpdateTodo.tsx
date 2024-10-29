import styled from "@emotion/styled";
import { FormEventHandler, useState } from "react";
import { useSetRecoilState } from "recoil";

import { TodoBase } from "./asset/TodoBase";
import { todoState } from "./state/todo.atom";
import { updateTodo } from "./state/todo.function";
import { Todo, TodoStatus } from "./types/todo.type";

interface Props {
  todo: Todo;
}

export default function UpdateTodo({ todo }: Props) {
  const [desc, setDesc] = useState(todo.description);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const setTodos = useSetRecoilState(todoState);

  const todoDescId = "todo-description-" + todo.id;
  const todoDateId = "todo-date-" + todo.id;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTodo: Todo = {
      ...todo,
      description: formData.get(todoDescId) as string,
      dueDate: formData.get(todoDateId) as string,
      canEdit: false,
    };

    updateTodo(newTodo, setTodos);
  };

  return (
    <TodoBase
      data-testid={"edit-todo-" + todo.id}
      transform={null}
      status={todo.status}
    >
      <Form onSubmit={handleSubmit}>
        <Input
          name={todoDescId}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input
          name={todoDateId}
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        ></Input>
        <SubmitButton status={todo.status} type="submit">
          TODO 등록 / 수정
        </SubmitButton>
      </Form>
    </TodoBase>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubmitButton = styled.button<{ status: TodoStatus }>`
  border: none;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 0.5rem;
  background-color: ${({ status, theme }) =>
    status === "할 일"
      ? theme.colors.todo
      : status === "진행 중"
        ? theme.colors.inProgress
        : theme.colors.done};
`;

const Input = styled.input`
  border: none;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 0.5rem;
`;

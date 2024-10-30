import styled from "@emotion/styled";
import { format } from "date-fns";
import { FormEventHandler, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuid } from "uuid";

import { newTodoState } from "./state/todo.atom";

const Form = styled.form``;

const Input = styled.input`
  width: 737px;
  height: 92px;
  padding: 32px;
  margin-top: 64px;
  border-radius: 24px;

  border: 0;

  background: #e5e5e5;
  font-size: 20px;

  &:placeholder-shown {
    font-weight: 400;
    line-height: 28px;
    color: #b9b9b9;
  }
`;

const Button = styled.button`
  display: hidden;
`;

export default function TodoInput() {
  const setTodo = useSetRecoilState(newTodoState);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodo((todos) => {
      const description = new FormData(e.currentTarget).get(
        "new-todo-input",
      ) as string;

      if (description.length >= 20) {
        alert("'할 일'은 20글자를 넘길 수 없습니다.");
        return todos;
      }

      const isMoreThan9 =
        todos.filter((todo) => todo.status === "할 일").length > 9;

      if (isMoreThan9) {
        alert("할 일 Todo가 10개를 넘을 수 없습니다.");
        return todos;
      } else {
        return [
          ...todos,
          {
            id: uuid(),
            createdAt: new Date().toISOString(),
            description,
            dueDate: format(new Date(), "yyyy-MM-dd"),
            status: "할 일",
            canEdit: true,
          },
        ];
      }
    });
    if (formRef.current) formRef.current.reset();
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Input
        name="new-todo-input"
        required
        maxLength={20}
        placeholder="할 일을 입력해 주세요"
      ></Input>
      <Button type="submit" data-testid="submit-button"></Button>
    </Form>
  );
}

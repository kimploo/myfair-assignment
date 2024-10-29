import { render } from "@testing-library/react";
import { RecoilRoot, RecoilState } from "recoil";

import LayoutRecoil from "../../app/layout.recoil";
import LayoutTheme from "../../app/layout.theme";
import { dummyTodos } from "../../util/dummyData";

import { todoState } from "./state/todo.atom";
import { Todo } from "./types/todo.type";
import UpdateTodo from "./UpdateTodo";

const initializeState = ({
  set,
}: {
  set: <T>(recoilState: RecoilState<T>, value: T) => void;
}) => {
  set<Todo[]>(todoState, dummyTodos);
};

const dummyTodo: Todo = {
  id: "test-id",
  description: "프로젝트 회의를 위한 자료 준비",
  dueDate: "2024-11-01",
  status: "할 일",
  createdAt: "2024-10-27T00:00:00.000Z",
  canEdit: true,
};

const newTodo: Todo = {
  id: "test-new-todo",
  description: "",
  dueDate: "2024-11-01",
  status: "할 일",
  createdAt: "2024-10-27T00:00:00.000Z",
  canEdit: true,
};

describe("UpdateTodo 테스트", () => {
  it("Todo 설명 표시", () => {
    const page = render(
      <LayoutTheme>
        <RecoilRoot>
          <UpdateTodo todo={dummyTodo} />
        </RecoilRoot>
      </LayoutTheme>,
    );
    const input = page.getByDisplayValue("프로젝트 회의를 위한 자료 준비");
    expect(input).toBeVisible();
  });

  it("Todo 날짜 표시", () => {
    const page = render(
      <LayoutTheme>
        <RecoilRoot>
          <UpdateTodo todo={dummyTodo} />
        </RecoilRoot>
      </LayoutTheme>,
    );
    const input = page.getByDisplayValue("2024-11-01");
    expect(input).toBeVisible();
  });
});

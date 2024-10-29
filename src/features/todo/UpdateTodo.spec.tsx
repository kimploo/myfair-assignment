import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import LayoutTheme from "../../app/layout.theme";

import { Todo } from "./types/todo.type";
import UpdateTodo from "./UpdateTodo";

const dummyTodo: Todo = {
  id: "test-id",
  description: "프로젝트 회의를 위한 자료 준비",
  dueDate: "2024-11-01",
  status: "할 일",
  createdAt: "2024-10-27T00:00:00.000Z",
  canEdit: true,
};

describe("UpdateTodo 렌더링 테스트", () => {
  it("Todo 설명 표시", () => {
    render(
      <LayoutTheme>
        <RecoilRoot>
          <UpdateTodo todo={dummyTodo} />
        </RecoilRoot>
      </LayoutTheme>,
    );
    const input = screen.getByDisplayValue("프로젝트 회의를 위한 자료 준비");
    expect(input).toBeVisible();
  });

  it("Todo 날짜 표시", () => {
    render(
      <LayoutTheme>
        <RecoilRoot>
          <UpdateTodo todo={dummyTodo} />
        </RecoilRoot>
      </LayoutTheme>,
    );
    const input = screen.getByDisplayValue("2024-11-01");
    expect(input).toBeVisible();
  });
});

import { render, screen } from "@testing-library/react";
import { RecoilRoot, RecoilState } from "recoil";

import LayoutTheme from "../../app/layout.theme";
import { todoState } from "../../features/old-todo/state/todo.atom";
import { dummyTodos } from "../../util/dummyData";

import NewPage from "./NewPage";

const initializeState = ({
  set,
}: {
  set: <T>(recoilState: RecoilState<T>, value: T) => void;
}) => {
  set(todoState, dummyTodos);
};

describe("TodoUserListPage 테스트", () => {
  it("제목 렌더링", () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <NewPage></NewPage>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const h1 = screen.getByText("To Do List");
    expect(h1).toBeVisible();
  });
});

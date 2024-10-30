import { render, screen } from "@testing-library/react";
import { RecoilRoot, RecoilState } from "recoil";

import LayoutTheme from "../../app/layout.theme";
import { newTodoState } from "../../features/todo/state/todo.atom";
import { newDummy } from "../../util/newDummy";

import NewPage from "./NewPage";

const initializeState = ({
  set,
}: {
  set: <T>(recoilState: RecoilState<T>, value: T) => void;
}) => {
  set(newTodoState, newDummy);
};

describe("V2: New Page 테스트", () => {
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

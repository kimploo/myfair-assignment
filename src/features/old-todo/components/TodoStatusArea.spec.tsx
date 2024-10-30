import {
  // prettyDOM,
  render,
  screen,
} from "@testing-library/react";
import { RecoilRoot, RecoilState } from "recoil";

import LayoutTheme from "../../../app/layout.theme";
import { dummyTodos } from "../../../util/dummyData";
import { todoState } from "../state/todo.atom";
import { Todo } from "../types/todo.type";

import TodoStatusArea from "./TodoStatusArea";

const initializeState = ({
  set,
}: {
  set: <T>(recoilState: RecoilState<T>, value: T) => void;
}) => {
  set<Todo[]>(todoState, dummyTodos);
};

describe.skip("V1: TodoStatusArea 유닛 테스트", () => {
  it("TodoStatusArea 렌더링 테스트", () => {
    render(
      <LayoutTheme>
        <RecoilRoot initializeState={initializeState}>
          <TodoStatusArea status="할 일"></TodoStatusArea>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const status1 = screen.getByTestId("할 일-section");
    expect(status1).toBeVisible();
    const status2 = screen.getByText("할 일");
    expect(status2).toBeVisible();
  });
});

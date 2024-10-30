import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import LayoutTheme from "../../../app/layout.theme";

import NewTodoCounter from "./TodoCounter";

describe("V2: TodoCounter 렌더링 테스트", () => {
  it("TodoCounter에 전달하는 숫자에 맞게 렌더링해야 합니다. (1)", () => {
    render(
      <LayoutTheme>
        <RecoilRoot>
          <NewTodoCounter count={5}></NewTodoCounter>
        </RecoilRoot>
      </LayoutTheme>,
    );

    expect(screen.getByText("총 5개")).toBeVisible();
  });
});

import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import LayoutTheme from "../../../app/layout.theme";

import TodoCheckbox from "./TodoCheckbox";

describe("V2: TodoCheckbox 렌더링 테스트", () => {
  it("TodoCheckbox check시 check 표시가 보여야 합니다.", () => {
    render(
      <LayoutTheme>
        <RecoilRoot>
          <TodoCheckbox checked={true} fn={() => {}}></TodoCheckbox>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.children).toBeTruthy();
  });

  it("TodoCheckbox uncheck시 check 표시가 없어야 합니다.", () => {
    render(
      <LayoutTheme>
        <RecoilRoot>
          <TodoCheckbox checked={false} fn={() => {}}></TodoCheckbox>
        </RecoilRoot>
      </LayoutTheme>,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.children.length).toBe(0);
  });
});

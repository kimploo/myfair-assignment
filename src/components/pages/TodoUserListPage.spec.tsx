import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import TodoUserListPage from "./TodoUserListPage";

describe("TodoUserListPage 테스트", () => {
  it("제목 렌더링", () => {
    const page = render(<TodoUserListPage />);

    const h1 = page.getByText("TODO App");
    expect(h1).toBeVisible();
  });
});

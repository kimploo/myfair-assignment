import { render } from "@testing-library/react";

import Test from "./Test";

describe("React Component 테스트", () => {
  it("테스트 동작 여부 확인", () => {
    const page = render(<Test />);
    const div = page.queryByText("test react");
    expect(div).toBeVisible();
  });
});

import { render } from "@testing-library/react";

import TestEmotion from "./TestEmotion";

describe("Emotion 테스트", () => {
  it("테스트 동작 여부 확인", () => {
    const page = render(<TestEmotion />);
    const div = page.queryByText("test react");
    expect(div).toBeVisible();
  });
});

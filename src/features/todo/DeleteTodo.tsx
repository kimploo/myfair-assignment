import styled from "@emotion/styled";

import Close from "./assets/Close";

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 100%;
  color: rgba(185, 185, 185, 1);
`;

interface Props {
  testId?: string;
  fn: () => void;
}

export default function DeleteTodo({ testId, fn }: Props) {
  return (
    <Container data-testid={testId} onClick={() => fn()}>
      <Close></Close>
    </Container>
  );
}

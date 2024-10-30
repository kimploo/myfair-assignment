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
  fn: () => void;
}

export default function DeleteTodo({ fn }: Props) {
  return (
    <Container onClick={() => fn()}>
      <Close></Close>
    </Container>
  );
}

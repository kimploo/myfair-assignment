/** */

import styled from "@emotion/styled";

import Close from "../assets/Close";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 100%;
  color: rgba(185, 185, 185, 1);
`;

export default function TodoX() {
  return (
    <Container>
      <Close></Close>
    </Container>
  );
}

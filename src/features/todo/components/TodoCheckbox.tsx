/** */

import styled from "@emotion/styled";

import Check from "../assets/Check";

interface Props {
  checked?: boolean;
}

const Container = styled.div<{ checked?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border: ${({ checked }) =>
    checked ? "none" : "1px solid rgba(229, 229, 229, 1)"};
  background-color: ${({ checked }) => (checked ? "#2182F3" : "transparent")};
  border-radius: 9999px;
`;

export default function TodoCheckbox({ checked }: Props) {
  return <Container checked={checked}>{checked ? <Check /> : null}</Container>;
}

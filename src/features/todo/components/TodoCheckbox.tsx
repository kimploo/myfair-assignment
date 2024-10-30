/** */

import styled from "@emotion/styled";

import Check from "../assets/Check";
import Close from "../assets/Close";

const Container = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 9999px;
`;

export default function TodoCheckbox() {
  return <Container></Container>;
}

import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.nav``;

const NavButton = styled.button<{
  selected?: boolean;
}>`
  width: 108px;
  height: 40px;
  padding: 8px 32px 8px 32px;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  color: ${({ selected, theme }) => {
    return selected ? "rgba(33, 130, 243, 1)" : theme.colorsNew.navText;
  }};
  background-color: ${({ selected, theme }) => {
    return selected ? "rgba(235, 244, 255, 1)" : theme.colorsNew.paper;
  }};
`;

export default function TodoNav() {
  const [selected, setSel] = useState("All");

  return (
    <Container>
      {["All", "To do", "Done"].map((navitem) => (
        <NavButton
          key={navitem}
          selected={selected === navitem}
          onClick={() => setSel(navitem)}
        >
          {navitem}
        </NavButton>
      ))}
    </Container>
  );
}

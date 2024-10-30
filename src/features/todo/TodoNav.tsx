import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

import { navState } from "./state/todo.atom";
import { NavStatus } from "./types/todo.type";

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
  const [nav, setNav] = useRecoilState(navState);
  const navList: NavStatus[] = ["All", "To Do", "Done"];

  return (
    <Container>
      {navList.map((navitem) => (
        <NavButton
          key={navitem}
          selected={nav === navitem}
          onClick={() => setNav(navitem)}
        >
          {navitem}
        </NavButton>
      ))}
    </Container>
  );
}

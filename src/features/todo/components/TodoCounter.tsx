import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding-left: 16px;
`;

export default function NewTodoCounter({ count }: { count: number }) {
  return <Container>{`총 ${count}개`}</Container>;
}

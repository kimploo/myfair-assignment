import styled from "@emotion/styled";

const Input = styled.input`
  width: 737px;
  height: 92px;
  padding: 32px;
  margin-top: 64px;
  border-radius: 24px;

  border: 0;

  background: #e5e5e5;
  font-size: 20px;

  &:placeholder-shown {
    font-weight: 400;
    line-height: 28px;
    color: #b9b9b9;
  }
`;

export default function TodoInput() {
  return <Input placeholder="할 일을 입력해 주세요"></Input>;
}

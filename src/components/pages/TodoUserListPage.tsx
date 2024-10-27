"use client";

import styled from "@emotion/styled";
import React from "react";

import TodoList from "../../features/todo/TodoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 600;
`;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <Heading>TODO Application</Heading>
      <TodoList></TodoList>
    </Container>
  );
};

export default TodoUserListPage;

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
  font-size: 2rem;
  font-weight: 700;

  padding: 1rem 0;
`;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <Heading>TODO App</Heading>
      <TodoList></TodoList>
    </Container>
  );
};

export default TodoUserListPage;

"use client";

import styled from "@emotion/styled";
import React from "react";

import TodoList from "../../features/old-todo/TodoList";

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

const OldAssignmentPage = () => {
  return (
    <Container>
      <Heading>TODO App</Heading>
      <TodoList></TodoList>
    </Container>
  );
};

export default OldAssignmentPage;

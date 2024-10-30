"use client";

import styled from "@emotion/styled";
import React from "react";

import TodoInput from "../../features/todo/TodoInput";
import TodoPaper from "../../features/todo/TodoPaper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 128px;
  background-color: ${({ theme }) => theme.colorsNew.background};

  height: 100%;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 72px;
  margin: 0;
  padding: 0;
`;

const NewPage = () => {
  return (
    <Container>
      <Heading>To Do List</Heading>
      <TodoInput></TodoInput>
      <TodoPaper></TodoPaper>
    </Container>
  );
};

export default NewPage;

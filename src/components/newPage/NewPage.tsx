"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

import TodoInput from "../../features/todo/TodoInput";
import TodoPaper from "../../features/todo/TodoPaper";

const V1Router = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;

  background-color: rgba(235, 244, 255, 1);
  padding: 1rem;
`;

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
      <Link href={"old-todo"}>
        <V1Router>
          피그마를 제출 6시간 전에 발견해서 🙃 그전까지 자기 멋대로 만든 Todo
          App V1 보러 가기 👉
        </V1Router>
      </Link>
    </Container>
  );
};

export default NewPage;

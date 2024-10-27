"use client";

import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
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
    </Container>
  );
};

export default TodoUserListPage;

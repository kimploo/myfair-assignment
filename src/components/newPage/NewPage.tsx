"use client";

import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 128px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const NewPage = () => {
  return (
    <Container>
      <Heading>To Do List</Heading>
    </Container>
  );
};

export default NewPage;

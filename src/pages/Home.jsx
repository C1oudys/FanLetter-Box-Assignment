import React, { useState } from "react";
import LetterList from "../components/LetterList";
import Header from "../components/Header";
import Form from "../components/Form";
import { styled } from "styled-components";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Container>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      <Form />
      <LetterList activeTab={activeTab} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

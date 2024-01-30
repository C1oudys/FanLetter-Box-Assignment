import React from "react";
import Header from "components/Header";
import LetterList from "components/LetterList";
import Form from "components/Form";

export default function Home() {
  return (
    <Container>
      <Header />
      <Form />
      <LetterList />
    </Container>
  );
}
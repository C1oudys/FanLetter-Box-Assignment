import React from "react";
import LetterList from "../components/LetterList";
import Header from "../components/Header";
import Form from "../components/Form";
import fakeData from '../fakeData.json';
import { useState } from "react";

export default function Home() {
    const [letters, setLetters] = useState(fakeData);
  return (
    // <Container>
    <>
      <Header />
      <Form />
      <LetterList initialLetters={letters} />
      </>
    // </Container>
  );
}
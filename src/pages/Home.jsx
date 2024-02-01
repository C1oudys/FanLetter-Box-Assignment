// Home.js
import React, { useState } from "react";
import LetterList from "../components/LetterList";
import Header from "../components/Header";
import Form from "../components/Form";
import styled from "styled-components";
import fakeData from "../shared/fakeData.json";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [fakeData, setFakeData] = useState(require("../shared/fakeData.json"));
  const [fanLetters, setFanLetters] = useState([]);

  const handleFanLetterSubmit = (newFanLetter) => {
    setFanLetters([...fanLetters, newFanLetter]);
  };

  const artists = ["all", "유진", "가을", "레이", "원영", "리즈", "이서"];

  const allData = [...fakeData, ...fanLetters];

  return (
    <Container>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} artists={artists} />
      <Form onFanLetterSubmit={handleFanLetterSubmit} artists={artists} />
      <LetterList activeTab={activeTab} fanLetters={allData} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

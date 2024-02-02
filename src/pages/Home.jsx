// Home.jsx
import React, { useState, useEffect } from "react";
import LetterList from "../components/LetterList";
import Header from "../components/Header";
import Form from "../components/Form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
`;

export default function Home({ fanLetters, setFanLetters }) {
  const [activeTab, setActiveTab] = useState("all");

  const handleFanLetterSubmit = (newFanLetter) => {
    setFanLetters([...fanLetters, newFanLetter]);
  };

  useEffect(() => {
    console.log('fanLetters after submit:', fanLetters);
  }, [fanLetters]);

  const artists = ["전체", "유진", "가을", "레이", "원영", "리즈", "이서"];

  const navigate = useNavigate();

  const handleLetterClick = (letterId) => {
    const selected = fanLetters.find((letter) => letter.id === letterId);
    navigate(`/detail/${letterId}`);
  };

  return (
    <Container>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} artists={artists} />
      <Form onFanLetterSubmit={handleFanLetterSubmit} artists={artists} />
      <LetterList activeTab={activeTab} fanLetters={fanLetters} onLetterClick={handleLetterClick} />
    </Container>
  );
}

import React from "react";
import LetterList from "../components/LetterList";
import Header from "../components/Header";
import Form from "../components/Form";
import styled from "styled-components";
import { useFanLetters } from "../context/FanLettersContext"; 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
`;

const NoLettersMessage = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-shadow: 0 0 7px #ff66b2, 0 0 10px #ff66b2, 0 0 21px #ff66b2, 0 0 42px #ff66b2,
    0 0 82px #ff66b2, 0 0 92px #ff66b2, 0 0 102px #ff66b2, 0 0 151px #ff66b2;
  color: #fff;
  font-size: 20px;
`;

export default function Home() {
  const { fanLetters, setFanLetters } = useFanLetters(); // useFanLetters 훅을 사용하여 fanLetters 상태 가져오기

  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  // 해당 멤버에게 남겨진 팬레터가 있는지 확인하는 함수
  const hasLettersForArtist = (artist) => {
    return fanLetters.some((letter) => letter.writedTo === artist);
  };

  const handleFanLetterSubmit = (newFanLetter) => {
    setFanLetters([...fanLetters, newFanLetter]);
  };

  useEffect(() => {
    console.log('fanLetters after submit:', fanLetters);
  }, [fanLetters]);

  const artists = ["all", "유진", "가을", "레이", "원영", "리즈", "이서"];

  const handleLetterClick = (letterId) => {
    const selected = fanLetters.find((letter) => letter.id === letterId);
    navigate(`/detail/${letterId}`);
  };

  return (
    <Container>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} artists={artists} />
      <Form onFanLetterSubmit={handleFanLetterSubmit} artists={artists} />
      {/* 해당 멤버에게 남겨진 팬레터가 없다면 메시지를 표시 */}
      {activeTab !== "all" && !hasLettersForArtist(activeTab) && (
        <NoLettersMessage>{`${activeTab}에게 남겨진 팬레터가 없습니다. 첫 팬레터의 주인공이 되주세요!`}</NoLettersMessage>
      )}
      <LetterList activeTab={activeTab} fanLetters={fanLetters} onLetterClick={handleLetterClick} />
    </Container>
  );
}

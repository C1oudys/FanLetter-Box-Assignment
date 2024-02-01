// Form.js
import React, { useState } from "react";
import styled from "styled-components";
import fakeData from "../shared/fakeData.json";
import defaultAvatar from "../assets/defaultavatar.png";
import { v4 as uuidv4 } from 'uuid';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
`;

const TextArea = styled.textarea`
  margin: 10px;
`;

const Select = styled.select`
  margin: 10px;
`;

const Option = styled.option``;

const SubmitButton = styled.button`
  margin: 10px;
`;

const Form = ({ onFanLetterSubmit, artists }) => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("all");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // 입력 유효성 검사
    if (!nickname || !content || selectedArtist === "all") {
      alert("닉네임, 내용, 멤버를 선택하세요.");
      return;
    }

    // 입력 내용 제한
    const trimmedNickname = nickname.slice(0, 20); // 20자 제한
    const trimmedContent = content.slice(0, 200); // 200자 제한

    // 새로운 팬 레터 객체 생성
    const newFanLetter = {
      id: uuidv4(), // Generate UUID v4
      avatar: defaultAvatar, // 기본 아바타 이미지 사용
      nickname: trimmedNickname,
      content: trimmedContent,
      createdAt: new Date().toLocaleString(), // 현재 날짜 및 시간
      writedTo: selectedArtist,
    };

    // 부모 컴포넌트로 팬 레터 전송
    onFanLetterSubmit(newFanLetter);

    // 입력값 초기화
    setNickname("");
    setContent("");
    setSelectedArtist("all");

    // 팬레터 등록 완료 알림
    alert("등록 완료되었습니다.");
  };

  return (
    <FormContainer>
      <AddForm onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
        />
        <TextArea
          placeholder="팬레터 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={200}
        />
        <Select
          value={selectedArtist}
          onChange={(e) => setSelectedArtist(e.target.value)}
        >
          <Option value="all">멤버를 선택해주세요</Option>
          {artists.map((artist) => (
            <Option key={artist} value={artist}>
              {artist}
            </Option>
          ))}
        </Select>
        <SubmitButton type="submit">등록하기</SubmitButton>
      </AddForm>
    </FormContainer>
  );
};

export default Form;

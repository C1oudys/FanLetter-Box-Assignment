import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const DetailContent = styled.div`
  width: 500px;
  background-color: #dc143c;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

const Detail = ({ fanLetters }) => {
  const { id } = useParams();

  // 선택된 팬레터 가져오기
  const selectedLetter = fanLetters.find((letter) => letter.id === id);

  if (!selectedLetter) {
    return <div>팬레터를 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <h2>팬레터 상세 내용</h2>
      <DetailContent>
        <p>
          <strong>닉네임:</strong> {selectedLetter.nickname}
        </p>
        <p>
          <strong>내용:</strong> {selectedLetter.content}
        </p>
        <p>
          <strong>작성 시간:</strong> {selectedLetter.createdAt}
        </p>
        <p>
          <strong>작성 대상:</strong> {selectedLetter.writedTo}
        </p>
      </DetailContent>
    </DetailContainer>
  );
};

export default Detail;

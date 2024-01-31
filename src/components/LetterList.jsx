// LetterList.js

import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import fakeData from "../shared/fakeData.json"; // fakeData를 import합니다.

// Styled-components for Avatar
const AvatarImage = styled.img`
  width: 50px; // Adjust the size as needed
  height: 50px;
  border-radius: 50%;
`;

// LetterList 컴포넌트
const LetterList = ({ activeTab }) => {
  if (!fakeData) {
    return null; // fakeData가 없을 경우 null을 반환하거나 다른 처리를 수행합니다.
  }

  return (
    <div>
      {fakeData
        .filter((letter) => activeTab === "all" || letter.writedTo === activeTab)
        .map((letter) => (
          <Letter key={letter.id} letter={letter} />
        ))}
    </div>
  );
};

export default LetterList;

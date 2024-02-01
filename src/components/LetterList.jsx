// LetterList.js
import React from "react";
import styled from "styled-components";
import Letter from "./Letter";

const LetterList = ({ activeTab, fanLetters }) => {
  if (!fanLetters) {
    return null;
  }

  return (
    <div>
      {fanLetters
        .filter((letter) => activeTab === "all" || letter.writedTo === activeTab)
        .map((letter) => (
          <Letter key={letter.id} letter={letter} />
        ))}
    </div>
  );
};

export default LetterList;

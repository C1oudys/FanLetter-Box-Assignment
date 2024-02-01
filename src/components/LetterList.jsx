import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import { Link, useNavigate } from "react-router-dom";

const LetterList = ({ activeTab, fanLetters, onLetterClick }) => {
  if (!fanLetters) {
    return null;
  }

  return (
    <div>
      {fanLetters
        .filter((letter) => activeTab === "all" || letter.writedTo === activeTab)
        .map((letter) => (
          <Link key={letter.id} to={`/detail/${letter.id}`} onClick={() => onLetterClick(letter.id)}>
            <Letter letter={letter} />
          </Link>
        ))}
    </div>
  );
};

export default LetterList;


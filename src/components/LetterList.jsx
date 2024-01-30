import React, { useState } from 'react';

const LetterList = ({ initialLetters }) => {
  const [letters, setLetters] = useState(initialLetters);

  const addNewCard = (newCard) => {
    // 새로운 카드를 추가하는 로직
    setLetters((prevLetters) => [...prevLetters, newCard]);
  };

  return (
    <div>
      <ul>
        {letters.map((letter) => (
          <li key={letter.id}>
            <div>
              <img src={letter.avatar} alt={letter.nickname} />
              <span>{letter.nickname}</span>
            </div>
            <div>
              <p>{letter.content.length > 50 ? `${letter.content.slice(0, 50)}...` : letter.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LetterList;

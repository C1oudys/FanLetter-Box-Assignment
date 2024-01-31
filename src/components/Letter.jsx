  // Import necessary libraries
  import React from "react";
  import styled from "styled-components";

  // Styled-components for Avatar
  const AvatarImage = styled.img`
    width: 50px; // Adjust the size as needed
    height: 50px;
    border-radius: 50%;
  `;

  // Letter 컴포넌트
  const Letter = ({ letter }) => {
    return (
      <div key={letter.id}>
        {/* Display Avatar */}
        <AvatarImage src={letter.avatar} alt="Avatar" />
        <p>{letter.nickname}</p>
        <p>{letter.createdAt}</p>
        {/* Display Fan Letter Details */}
        <p>{letter.content.length > 50 ? `${letter.content.slice(0, 50)}...` : letter.content}</p>
      </div>
    );
  };

  export default Letter;

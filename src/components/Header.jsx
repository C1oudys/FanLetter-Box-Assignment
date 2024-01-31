// Header.js

import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ArtistTab = styled.div`
  padding: 10px;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
    background-color: #f0f0f0;
    color: #333;
  `}
`;

const Header = ({ setActiveTab, activeTab }) => {
  const artists = ["all", "유진", "가을", "레이", "원영", "리즈", "이서"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const artistNames = {
    all: "전체",
    유진: "안유진",
    가을: "가을",
    레이: "레이",
    원영: "장원영",
    리즈: "리즈",
    이서: "이서",
  };

  return (
    <HeaderContainer>
      {artists.map((artist) => (
        <ArtistTab
          key={artist}
          isActive={activeTab === artist}
          onClick={() => handleTabClick(artist)}
        >
          {artistNames[artist]}
        </ArtistTab>
      ))}
    </HeaderContainer>
  );
};

export default Header;

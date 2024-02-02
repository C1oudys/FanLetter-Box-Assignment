import React from "react";
import styled from "styled-components";
import { useParams, Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.png";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${backgroundImage});
  background-size: cover;
`;

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const DetailContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgba(178, 34, 34, 0.7);
  border-radius: 3%;
  width: 800px;
  height: 500px;
`;

const Nickname = styled.p`
  font-weight: bold;
  color: #f5f5f5;
  margin-bottom: 10px;
  font-size: 20px;
`;

const CreatedAt = styled.p`
  color: #e6e6fa; 
  margin-bottom: 5px; 
  font-size: 20px;
  margin-bottom: 20px;
`;

const WritedTo = styled.p`
  color: #e6e6fa; 
  margin-bottom: 5px; 
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const Content = styled.p`
  margin: 5px; 
  padding: 10px;
  width: 650px;
  height: 250px;
  color: 	#fffaf0;
  background-color: rgba(255, 69, 0, 0.4);
  line-height: 1.4;
  font-size: 19px;
  margin-bottom: 40px;
`;

const BackButton = styled(Link)`
  background-color: #f08080;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #800000;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 10px;
`;

const Detail = ({ fanLetters, setFanLetters }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 선택된 팬레터 가져오기
  const selectedLetter = fanLetters.find((letter) => letter.id === id);

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      // 삭제 확인 시 팬레터 삭제 및 홈 화면으로 이동
      const updatedFanLetters = fanLetters.filter((letter) => letter.id !== id);
      setFanLetters(updatedFanLetters);
      navigate("/");
    }
  };

  if (!selectedLetter) {
    return <div>팬레터를 찾을 수 없습니다.</div>;
  }

  return (
    <Container>
      <Background>
        <DetailContainer>
          <DetailContent>
            <Avatar src={selectedLetter.avatar} alt="아바타" />
            <WritedTo>
              <strong>To.</strong> {selectedLetter.writedTo}
            </WritedTo>
            <CreatedAt>
              <strong>작성 시간:</strong> {selectedLetter.createdAt}
            </CreatedAt>
            <Content>
              <strong>내용:</strong> {selectedLetter.content}
            </Content>
            <Nickname>
              <strong>From.</strong> {selectedLetter.nickname}
            </Nickname>
          </DetailContent>
          <DeleteButton onClick={handleDeleteClick}>삭제하기</DeleteButton>
          <BackButton to="/">홈으로 돌아가기</BackButton>
        </DetailContainer>
      </Background>
    </Container>
  );
};

export default Detail;
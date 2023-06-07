import styled from "styled-components";

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  padding: 4px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 12px auto;
  cursor: pointer;
  border-radius: 25px; // 버튼 모서리를 둥글게 만듭니다.
  background-color: #23272f; // 버튼 배경색을 변경합니다.
  position: relative; // 위치를 조정하기 위해 relative 포지셔닝을 사용합니다.
  left: -70px; // 왼쪽으로 10px 이동합니다.
`;

export default AddButton;

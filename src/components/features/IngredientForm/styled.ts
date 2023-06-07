import styled from "styled-components";

export const IngredientWarp = styled.div``;

export const IngredientRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const IngredientInput = styled.input`
  width: 200px;
  height: 50px;
  margin-left: 4px;
  margin-bottom: 4px;
  padding-inline-start: 12px;
  text-align: start;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  left: -60px;
`;

export const IngredientAddButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: #23272f; /* 버튼 배경 색상을 변경합니다. */
  border: none; /* 버튼 테두리를 없앱니다. */
  color: white; /* 글씨 색상을 흰색으로 바꿉니다. */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 6px; /* 글씨 크기를 줄입니다. */
  cursor: pointer;
  border-radius: 50%; /* 버튼을 원형으로 만듭니다. */
  padding: 0; /* 패딩을 0으로 설정합니다. */
  overflow: hidden; /* 글씨가 버튼 밖으로 나가는 것을 방지합니다. */
  position: relative;
  left: -50px;
`;

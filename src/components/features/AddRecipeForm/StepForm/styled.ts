import styled from "styled-components";

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
`;
export const StepNum = styled.p`
  font-size: large;
  font-weight: bold;
  margin-right: 10px;
`;
export const StepText = styled.textarea`
  flex: 1;
  resize: none;
  height: 250px;
  margin-right: 10px;
  padding: 5px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 3px;
  ::placeholder {
    color: rgba(
      0,
      0,
      0,
      0.5
    ); // 프레이스홀더 텍스트를 검은색의 50% 투명도로 설정
  }
`;
export const StepItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const StepAddButton = styled.button`
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

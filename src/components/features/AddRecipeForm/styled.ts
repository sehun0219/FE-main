import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  height: max-content;
  background-color: #23272f;
  padding: 32px;
`;

export const FirstSectionInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 24px;
`;

export const FirstSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #999999;
  padding-bottom: 32px;
`;

export const SecondSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 32px;
  min-height: 100px;
`;

export const Br = styled.div`
  background-color: #23272f;
  width: 100%;
  height: 10px;
`;

export const Notice = styled.span`
  width: 100%;
  margin-bottom: 30px;
`;

export const ThirdSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 32px;
  min-height: 100px;
`;

export const StepTitle = styled.p`
  width: 120px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
`;
export const StepExplanation = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const StepForm = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
`;
export const StepNumber = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const StepTextArea = styled.textarea`
  width: 40%;
  height: 100px;
  resize: none;
  margin-bottom: 10px;
`;
export const StepImg = styled.img`
  width: 150px;
  height: 100px;
  max-height: 200px;
  object-fit: cover;
`;
export const StepPlusButton = styled.button``;
export const CompleteTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
`;
export const CompleteImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const CompleteImg = styled.img`
  width: 140px;
  height: 140px;
  margin: 4px;
`;
export const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;

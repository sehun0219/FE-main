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

export const ImgButton = styled.button`
  width: 250px;
  height: 250px;
  background-color: #6969b3;
  background: url(https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047545.jpg)
    no-repeat;
  background-size: 40%;
  background-position: center;
  color: #6969b3;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  cursor: pointer;
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
  width: full;
  height: 10px;
`;

export const Notice = styled.span`
  width: 100%;
  margin-bottom: 30px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #293644;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin: 4px auto;
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
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const StepExplanation = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const StepForm = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 160%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
`;

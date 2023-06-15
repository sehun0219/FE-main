import styled from "styled-components";

export const PageWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const Footer = styled.div`
  border: 2px solid tomato;
  width: 100%;
  height: 160px;
`;

export const MainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #00ebed;
  width: 90%;
  height: 900px;
  padding: 10px 100px 10px 100px;
`;
export const MainImg = styled.img`
  width: 90%;
  height: 45%;
`;
export const AvatarImg = styled.img`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 118px;
  height: 118px;
  display: flex;
  position: relative;
  bottom: 60px;
  z-index: 9999;
  margin-bottom: -50px;
`;
export const UserId = styled.p`
  width: 160px;
  height: 20px;
  margin-bottom: 20px;
  color: #f1f1f1;
  font-weight: bold;
  font-size: large;
  display: flex;
  justify-content: center;
  border: 1px solid #f1f1f1;
`;
export const Title = styled.div`
  border: 1px solid #f1f1f1;
  width: 100%;
  height: 30px;
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: #fff8e7;
`;
export const Description = styled.p`
  border: 1px solid #f1f1f1;
  width: 100%;
  height: 6%;
  margin: 10px;
  display: flex;
  justify-content: center;
  color: #bebfc5;
  font-size: 18px;
  font-weight: 600;
`;
export const CookingInfo = styled.div`
  border: 1px solid #f1f1f1;
  width: 100%;
  height: 120px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const InfoItem = styled.p`
  border: 3px solid #8a2be2;
  width: 12%;
  height: 74%;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff8e7;
  font-weight: 600;
  padding-top: 6px;
`;

export const IngredientsWrap = styled.div`
  border: 2px solid #f1f112;
  width: 90%;
  height: 400px;
  padding: 60px 100px 40px 100px;
  display: flex;
  flex-direction: column;
`;
export const IngredientsTitle = styled.div`
  justify-content: center;
  width: 100%;
  height: 50px;
  border: 1px solid #f1f;
  margin-bottom: 20px;
  font-size: x-large;
  font-weight: bold;
  color: #f6f7f9;
`;
export const IngredientsDetailWrap = styled.div`
  justify-content: center;
  width: 100%;
  height: 200px; /* 갯수가 많아지면 늘어나야하는데..*/
  border: 1px solid #1f1;
  display: flex;
  flex-wrap: wrap;
`;
export const CoreItem = styled.p`
  width: 97%;
  height: 40px;
  margin: 20px 10px -20px 10px;
  color: #f6f7f9;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: first baseline;
`;
export const CoreText = styled.p`
  color: #f6f7f9;
  font-weight: 400;
  font-size: 20px;
  width: 110px;
  display: flex;
`;
export const ContentsBox = styled.div`
  width: 97%;
  height: 45%;
  border: 1px solid #ca8a04;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const Items = styled.div`
  width: 320px;
  height: 32px;
  border: 1px solid #f9a8d4;
`;

export const CookingStepWrap = styled.div`
  border: 2px solid #cbd5e1;
  width: 90%;
  height: 400px;
  padding: 60px 100px 60px 100px;
  display: flex;
  flex-direction: column;
`;
export const CookingStepTitle = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #f1f;
  margin-bottom: 20px;
`;
export const CookingStepCard = styled.div`
  width: 100%;
  height: 200px; /* 갯수가 많아지면 늘어나야하는데..*/
  border: 1px solid #e9d5ff;
  display: flex;
  flex-wrap: wrap;
`;
export const StepNum = styled.div`
  width: 12%;
  height: 200px;
  border: 1px solid #c2420b;
`;
export const StepDesc = styled.div`
  width: 53%;
  height: 200px;
  border: 1px solid #5eead4;
`;
export const StepImg = styled.div`
  width: 35%;
  height: 200px;
  border: 1px solid #5eead4;
`;

export const SideWrap = styled.div`
  border: 2px solid #0000ff;
  width: 360px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const MostViewCard = styled.div`
  width: 90%;
  height: 100px;
  border: 2px solid #fdba73;
  margin: 5px;
  display: flex;
`;

export const TextWrap = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid #f1f1f1;
`;
export const CardAvatar = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.div`
  color: #f1f1f1;
  margin: 10px;
  font-size: 14px;
  font-weight: 400;
`;
export const ViewTitle = styled.div`
  color: #f1f1f1;
  margin: 10px;
  font-size: 18px;
  font-weight: 400;
`;
export const ViewDesc = styled.div`
  width: 100%;
  height: 38%;
  border: 1px solid #db2777;
`;
export const ViewAvatar = styled.div`
  border: 3px solid #fdba73;
  width: 80%;
  height: 80%;
  border-radius: 200%;
`;
export const ViewId = styled.div`
  width: 90%;
  height: 20%;
  border: 1px solid #ffffff;
`;

export const GapBox = styled.div`
  width: 90%;
  height: 50px;
  border: 1px solid #21c55e;
  color: #f1f1f1;
  padding-top: 30px;
  padding-right: 16px;
  text-align: end;
  font-weight: 400;
`;

export const SideRecipeCard = styled.div`
  width: 90%;
  height: 360px;
  border: 1px solid #fde047;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SideRecipeImg = styled.div`
  width: 90%;
  height: 75%;
  border: 1px solid #f472b6;
  margin-top: 10px;
`;
export const SideRecipeTitle = styled.div`
  width: 90%;
  height: 20%;
  border: 1px solid #ffffff;
`;

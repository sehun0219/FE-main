import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  border: 1px solid blue;
`;

export const Top = styled.div`
  width: 100%;
  height: 40px;
  padding-top: 20px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 68px;
  color: #ffffff;
`;
export const MainBody = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const PageNationWrap = styled.div`
  width: calc(100% - 60px);
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageNation = styled.div`
  width: 540px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PageNationButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #4d5669;
  font-weight: bold;
  color: #ffffff;
  border: none;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    background-color: #627097;
  }
`;

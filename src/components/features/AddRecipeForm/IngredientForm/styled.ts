import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
`;
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
`;

export const TextBox = styled.input`
  width: 300px;
  height: 50px;
  margin-right: 10px;
`;

export const AddTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 190px;
`;

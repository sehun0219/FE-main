import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
`;

export const Select = styled.select`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid gray;
  appearance: none;
  background-color: white;
  background-image: url("https://fonts.gstatic.com/s/i/materialiconsoutlined/keyboard_arrow_down/v7/24px.svg?download=true");
  background-repeat: no-repeat;
  background-position: right;
  width: 123px;
  height: 45px;
`;

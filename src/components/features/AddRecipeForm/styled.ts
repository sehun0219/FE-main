import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  text-align: left;
  color: #6ee7b7;
  margin: 16px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: auto;
  background-color: #334155;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const Label = styled.label`
  font-size: 18px;
  color: #fff;
  margin: 4px;
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: #8b5cf6;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5b21b6;
  }
  &:active {
    background-color: #4c1d95;
  }
`;

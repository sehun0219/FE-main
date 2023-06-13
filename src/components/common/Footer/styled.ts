import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 14px;
`;

export const Text = styled.p`
  text-align: center;
`;

export const GitLink = styled.a`
  color: #ff6347; /* Tomato color for the link */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

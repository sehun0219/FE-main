import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Container>
      <p>
        © 2023 All rights reserved. This website is maintained by Cayde Kim.
        Visit the GitHub repository at{" "}
        <a
          href="https://github.com/sehun0219"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/sehun0219
        </a>
      </p>
    </Container>
  );
};

export default Footer;

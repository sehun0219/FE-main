import styled from "styled-components";

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  position: fixed;
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  top: 69px; // 네브바 아래에 사이드바 위치
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 1;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }
`;

export const SidebarButton = styled.button`
  position: fixed; // 버튼을 고정 위치로 변경
  top: 0.8rem; // 버튼을 상단에서 조금 떨어뜨림
  left: 0.8rem; // 버튼을 왼쪽에서 조금 떨어뜨림
  background-color: #23272f;
  color: #f1f1f1;
  border: none;
  cursor: pointer;
  padding: 15px;
  z-index: 1;
`;

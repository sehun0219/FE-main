import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #23272f;
  height: 60px;
`;
export const ToggleBox = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid #23272f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #23272f;
  margin-left: 25px;
  cursor: pointer;
  &:hover {
    background-color: #21a1c1;
    border-radius: 50%;
  }
  transition: background-color 0.1s;
`;
export const Line = styled.div`
  width: 100%;
  height: 1%;
  border: 2px solid #f6f7f9;
`;

export const LogoWrap = styled.a`
  width: 210px;
  height: 100%;
  position: relative;
  left: 5%;
  color: #f6f7f9;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const TextBox = styled.p`
  width: 100%;
  height: 30%;
  padding-top: 4px;
  margin-left: 4px;
  display: flex;
  align-items: center;
`;
export const LogoIcon = styled.img`
  width: 18%;
  height: 4%;
`;

export const SearchWrap = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="text"]:focus {
    caret-color: #f1f1f1;
  }
`;
export const NavbarLogo = styled.p``;

export const SearchBar = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 50px;
  background-color: #353a48;
  border: none;
  padding-left: 40px;
  color: #f1f1f1;
  font-size: 18px;
  /* 포커스 시 outline 색상 변경 */
  &:focus {
    outline: 2px solid #21a1c1;
  }
  position: relative;
  left: 10%;
`;

export const CancelButton = styled.button`
  width: 2%;
  height: 3%;
  border-radius: 40%;
  background-color: #23272f;
  border: none;
  position: absolute;
  left: 63%;
  color: #f1f1f1;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  width: 2%;
  height: 3%;
  border-radius: 40%;
  background-color: #23272f;
  border: none;
  position: absolute;
  left: 66%;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 25%;
  height: 100%;
  position: relative;
  left: -40px;
  width: 240px;
  gap: 16px;
`;

export const StyledLinkSignUp = styled(Link)`
  width: 100px;
  height: 70%;
  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLogin = styled(Link)`
  width: 100px;
  height: 70%;
  border: 1px solid red;
  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WelcomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -210px;
  width: 100px;
`;

export const WelcomeText = styled.p`
  width: 100%;
  height: 100%;
  color: #21a1c1;
  font-size: 16px;
  font-weight: 400;
`;

export const AddRecipeButton = styled(Link)`
  width: 100px;
  height: 80%;
  border: 1px solid red;
  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logout = styled.button`
  width: 100px;
  height: 80%;
  border: 1px solid red;
  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

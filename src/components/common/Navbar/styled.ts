import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #23272f;
  height: 60px;
  padding: 8px 12px;
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
  color: #f6f7f9;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const TextBox = styled.p`
  display: flex;
  align-items: center;
  padding-top: 2px;
  padding-left: 2px;
`;
export const LogoIcon = styled.img`
  width: 55px;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="text"]:focus {
    caret-color: #f1f1f1;
  }
`;

export const SearchBar = styled.input`
  width: 1000px;
  height: 40px;
  border-radius: 1em;
  padding-left: 30px;
  margin-right: -70px;
  background-color: #353a48;
  border: none;
  color: #f1f1f1;
  font-size: 18px;
  &:focus {
    outline: 2px solid #21a1c1;
  }
`;

export const CancelButton = styled.button`
  border-radius: 40%;
  background-color: #23272f;
  border: none;
  color: #696969;
  cursor: pointer;
  margin-right: 10px;
  font-size: 18px;
  border-radius: 50%;
  font-weight: 100;
`;

export const SearchButton = styled.button`
  border-radius: 1em;
  background-color: #23272f;
  border: none;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 100%;

  gap: 16px;
`;
export const LogoutWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledLinkSignUp = styled(Link)`
  width: 100px;
  height: 80%;
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
export const SignUpWarp = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const WelcomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
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
  height: 100%;
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
  padding-top: 4px;
`;
export const Logout = styled.button`
  width: 100px;
  height: 100%;
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

export const LogoutBox = styled.div`
  display: flex;
  gap: 16px;
`;

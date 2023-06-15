import { useState, MouseEvent, ChangeEvent, useContext } from "react";
import { UserContext } from "@/store/UserContext";

import {
  NavbarContainer,
  ButtonWrap,
  SearchWrap,
  SearchBar,
  LogoWrap,
  LogoIcon,
  SearchButton,
  CancelButton,
  StyledLinkSignUp,
  StyledLogin,
  AddRecipeButton,
  WelcomeBox,
  WelcomeText,
  Logout,
  ToggleBox,
  TextBox,
  Line,
} from "./styled";

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const [search, setSearch] = useState("");

  const userContext = useContext(UserContext);
  if (!userContext) {
    return <div>Loading...</div>;
  }

  const { user, token, logout } = userContext;

  const handleLogout = () => {
    logout();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearchButton = (e: MouseEvent<HTMLButtonElement>) => {
    // 쿼리만들고 결과값 찾아서 아랫쪽에 뿌려줘야함...
    e.preventDefault();
    return null;
  };

  return (
    <NavbarContainer>
      <ToggleBox onClick={toggleSidebar}>
        <Line />
        <Line />
        <Line />
      </ToggleBox>
      <LogoWrap href="/">
        <LogoIcon src="public/Logo/Logo.png"></LogoIcon>
        <TextBox>What should I eat</TextBox>
      </LogoWrap>
      <SearchWrap>
        <SearchBar type="text" value={search} onChange={handleSearch} />
        <CancelButton>X</CancelButton>
        <SearchButton onClick={handleSearchButton}>🔍</SearchButton>
      </SearchWrap>

      <ButtonWrap>
        {!user?.name && !token && (
          <>
            <StyledLinkSignUp to="/sign-up">Sign up</StyledLinkSignUp>
            <StyledLogin to="/login">Login</StyledLogin>
          </>
        )}{" "}
        {user?.name && token && (
          <>
            <WelcomeBox>
              <WelcomeText>Welcome!! {user.email}</WelcomeText>
            </WelcomeBox>
            <AddRecipeButton to="/add-recipe">Add Recipe</AddRecipeButton>
            <Logout onClick={handleLogout}>Logout</Logout>
          </>
        )}
      </ButtonWrap>
    </NavbarContainer>
  );
};

export default Navbar;

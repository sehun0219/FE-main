import { useState, MouseEvent, ChangeEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@/store/UserContext";

import {
  NavbarLogo,
  NavbarContainer,
  ButtonWrap,
  NavButton,
  SearchBar,
  LinkButton,
  SearchBarInput,
} from "./styled";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
    return null;
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <NavbarContainer>
      <NavbarLogo>What should I eat</NavbarLogo>
      <SearchBar>
        <SearchBarInput
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder=" Search.. "
        />

        <button onClick={handleSearchButton}></button>
      </SearchBar>

      <ButtonWrap>
        {!user?.name && !token && (
          <>
            <LinkButton to="/sign-up">Sign up</LinkButton>
            <LinkButton to="/login">Login</LinkButton>
          </>
        )}
        {user?.name && token && (
          <>
            <NavbarLogo>Hello! {user.name}</NavbarLogo>
            <LinkButton to="/add-recipe">Add Recipe</LinkButton>
            <NavButton onClick={handleLogout}>Logout</NavButton>
          </>
        )}
      </ButtonWrap>
    </NavbarContainer>
  );
};

export default Navbar;

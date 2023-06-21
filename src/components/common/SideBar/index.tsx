import { useContext } from "react";
import {
  Container,
  SideBarMenu,
  ShortCut,
  FooterBox,
  LinkTo,
  ShortCutMeneComp,
  ShortCutTitle,
  Br,
  Footer,
  Text,
  GitLink,
} from "./styled";
import { UserContext } from "@/store/UserContext";
import { useSidebar } from "@/store/SidebarContext";

const Sidebar = () => {
  const { isSidebarVisible } = useSidebar();
  const userContext = useContext(UserContext);
  if (!userContext) {
    return <div>Loading...</div>;
  }
  const { user, token } = userContext;
  return (
    <Container isSidebarVisible={isSidebarVisible}>
      <SideBarMenu>
        <LinkTo to="/">Home</LinkTo>
        {!user?.name && !token && (
          <>
            <LinkTo to="/login">Liked</LinkTo>
          </>
        )}
        {user?.name && token && (
          <>
            <LinkTo to="/liked">Liked</LinkTo>
          </>
        )}
        <LinkTo to="/recent">Recent</LinkTo>
        <LinkTo to="/login">Login</LinkTo>
      </SideBarMenu>
      <Br />
      <ShortCut>
        <ShortCutTitle>Quick Search</ShortCutTitle>
        <ShortCutMeneComp>MainDish</ShortCutMeneComp>
        <ShortCutMeneComp>Drink</ShortCutMeneComp>
        <ShortCutMeneComp>Snack</ShortCutMeneComp>
      </ShortCut>
      <FooterBox>
        <Footer>
          <Text>
            {`© 2023 All rights reserved. 
            This website is maintained by Cayde Kim.
            Visit the GitHub repository at`}
          </Text>
          <GitLink
            href="https://github.com/sehun0219"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/sehun0219
          </GitLink>
        </Footer>
      </FooterBox>
    </Container>
  );
};

export default Sidebar;

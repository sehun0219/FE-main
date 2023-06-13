import {
  Container,
  SideBarMenu,
  ShortCut,
  FooterBox,
  SingleMeneComp,
  ShortCutMeneComp,
  ShortCutTitle,
  Br,
  Footer,
  Text,
  GitLink,
} from "./styled";

const Sidebar = () => {
  return (
    <Container>
      <SideBarMenu>
        <SingleMeneComp>Home</SingleMeneComp>
        <SingleMeneComp>Saved</SingleMeneComp>
        <SingleMeneComp>Liked</SingleMeneComp>
        <SingleMeneComp>Login</SingleMeneComp>
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

import {
  Container,
  SideBarMenu,
  ShortCut,
  FooterBox,
  SingleMeneComp,
  ShortCutMeneComp,
  ShortCutTitle,
  Br,
} from "./styled";

import Footer from "../Footer/Footer";

const Sidebar = () => {
  const footer = Footer();
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
      <FooterBox>{footer}</FooterBox>
    </Container>
  );
};

export default Sidebar;

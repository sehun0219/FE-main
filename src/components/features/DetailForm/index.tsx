import {
  PageWrapper,
  MainContentWrap,
  MainWrap,
  SideWrap,
  Footer,
  MainImg,
  AvatarImg,
  UserId,
  Title,
  Description,
  CookingInfo,
  InfoItem,
  IngredientsWrap,
  MostViewCard,
  ViewTitle,
  ViewDesc,
  ViewAvatar,
  ViewId,
  SideRecipeCard,
  SideRecipeImg,
  SideRecipeTitle,
  IngredientsTitle,
  IngredientsDetailWrap,
  IngredientsDetailTitle,
  ContentsBox,
  CookingStepWrap,
  CookingStepTitle,
  CookingStepCard,
  StepNum,
  StepDesc,
  StepImg,
  Contents,
  CardTitle,
  CardAvatar,
  TextWrap,
  GapBox,
} from "./styled";

const DetailForm = () => {
  return (
    <PageWrapper>
      <MainContentWrap>
        <MainWrap>
          <MainImg></MainImg>
          <AvatarImg></AvatarImg>
          <UserId></UserId>
          <Title></Title>
          <Description></Description>
          <CookingInfo>
            <InfoItem />
            <InfoItem />
            <InfoItem />
          </CookingInfo>
        </MainWrap>

        <IngredientsWrap>
          <IngredientsTitle></IngredientsTitle>
          <IngredientsDetailWrap>
            <IngredientsDetailTitle></IngredientsDetailTitle>
            <ContentsBox>
              <Contents />
              <Contents />
              <Contents />
              <Contents />
            </ContentsBox>
          </IngredientsDetailWrap>
        </IngredientsWrap>

        <CookingStepWrap>
          <CookingStepTitle></CookingStepTitle>
          <CookingStepCard>
            <StepNum></StepNum>
            <StepDesc></StepDesc>
            <StepImg></StepImg>
          </CookingStepCard>
        </CookingStepWrap>
      </MainContentWrap>

      <SideWrap>
        <MostViewCard>
          <TextWrap>
            <CardTitle>Top Ranked</CardTitle>
            <ViewTitle>A must-win date recipe!...</ViewTitle>
            <ViewDesc></ViewDesc>
          </TextWrap>
          <CardAvatar>
            <ViewAvatar></ViewAvatar>
            <ViewId></ViewId>
          </CardAvatar>
        </MostViewCard>
        <MostViewCard>
          <TextWrap>
            <CardTitle>2ed Ranked</CardTitle>
            <ViewTitle>A must-win date recipe!...</ViewTitle>
            <ViewDesc></ViewDesc>
          </TextWrap>
          <CardAvatar>
            <ViewAvatar></ViewAvatar>
            <ViewId></ViewId>
          </CardAvatar>
        </MostViewCard>
        <MostViewCard>
          <TextWrap>
            <CardTitle>3rd Ranked</CardTitle>
            <ViewTitle>A must-win date recipe!...</ViewTitle>
            <ViewDesc></ViewDesc>
          </TextWrap>
          <CardAvatar>
            <ViewAvatar></ViewAvatar>
            <ViewId></ViewId>
          </CardAvatar>
        </MostViewCard>
        <GapBox>Recomendable</GapBox>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
      </SideWrap>

      <Footer></Footer>
    </PageWrapper>
  );
};

export default DetailForm;

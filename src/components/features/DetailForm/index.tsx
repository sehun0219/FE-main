import {
  PageWrapper,
  MainContentWrap,
  MainWrap,
  SideWrap,
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
  FormTitle,
  IngredientsDetailWrap,
  CoreItem,
  ContentsBox,
  CookingStepWrap,
  CookingStepCard,
  StepNum,
  StepDesc,
  StepImg,
  Item,
  ItemName,
  ItemQuantity,
  CardTitle,
  CardAvatar,
  TextWrap,
  GapBox,
  CoreText,
  EachStepCard,
  FooterBox,
} from "./styled";
import { useEffect, useState } from "react";
import DummyRecipeData from "@/store/DummyRecipeData";
import { RecipeData } from "@/interface/recipe";
import Footer from "@/components/common/Footer";
const DetailForm = () => {
  const [recipeData, setRecipeData] = useState<RecipeData>({
    mainImg: "",
    title: "",
    category: "",
    description: "",
    cookingInfo: {
      servingSize: "",
      cookingTime: "",
      difficulty: "",
      type: "",
    },
    coreItems: [],
    ingredient: [],
    completedImg: [],
    cookingStep: [
      {
        stepNum: 1,
        stepDesc: "",
        stepImg: "",
      },
    ],
    creator: {
      avatarImg: "",
      name: "",
    },
  });

  useEffect(() => {
    setRecipeData(DummyRecipeData[0]);
  }, []);

  return (
    <PageWrapper>
      <MainContentWrap>
        <MainWrap>
          <MainImg src={recipeData.mainImg}></MainImg>
          <AvatarImg src={recipeData.creator.avatarImg}></AvatarImg>
          <UserId>{recipeData.creator.name}</UserId>
          <Title>{recipeData.title}</Title>
          <Description>{recipeData.description}</Description>
          <CookingInfo>
            <InfoItem>{recipeData.cookingInfo.type}</InfoItem>
            <InfoItem>{recipeData.cookingInfo.servingSize}</InfoItem>
            <InfoItem>{recipeData.cookingInfo.cookingTime}</InfoItem>
            <InfoItem>{recipeData.cookingInfo.difficulty}</InfoItem>
          </CookingInfo>
        </MainWrap>

        <IngredientsWrap>
          <FormTitle>Ingredient</FormTitle>
          <IngredientsDetailWrap>
            <CoreItem>
              <CoreText>Core Items: </CoreText>
              {recipeData.coreItems.map((item, index) => (
                <p key={index}>
                  {item.itemName}
                  {index < recipeData.coreItems.length - 1 ? ",ㅤ" : ""}
                </p>
              ))}
            </CoreItem>
            <ContentsBox>
              {recipeData.ingredient.map((item, index) => (
                <Item key={index}>
                  <ItemName>{item.name}</ItemName>
                  <ItemQuantity>{item.quantity}</ItemQuantity>
                </Item>
              ))}
            </ContentsBox>
          </IngredientsDetailWrap>
        </IngredientsWrap>

        <CookingStepWrap>
          <FormTitle>Cooking Steps</FormTitle>
          <CookingStepCard>
            {recipeData.cookingStep.map((item, index) => (
              <EachStepCard key={index}>
                <StepNum>{item.stepNum}</StepNum>
                <StepDesc>{item.stepDesc}</StepDesc>
                <StepImg src={item.stepImg}></StepImg>
              </EachStepCard>
            ))}
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
            <CardTitle>2nd Ranked</CardTitle>
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
        <GapBox>Recommendable</GapBox>
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
      <FooterBox>
        <Footer></Footer>
      </FooterBox>
    </PageWrapper>
  );
};

export default DetailForm;

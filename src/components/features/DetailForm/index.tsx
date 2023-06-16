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
  CoreItem,
  ContentsBox,
  CookingStepWrap,
  CookingStepTitle,
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
} from "./styled";
import { useEffect, useState } from "react";
import DummyRecipeData from "@/store/DummyRecipeData";
import { RecipeData } from "@/interface/recipe";
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
    cookingStep: [],
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
          <IngredientsTitle>Ingredient</IngredientsTitle>
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
                <div key={index}>
                  <Item>
                    <ItemName>{item.name}</ItemName>
                    <ItemQuantity>{item.quantity}</ItemQuantity>
                  </Item>
                </div>
              ))}
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

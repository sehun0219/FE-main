import PTagForm from "@/components/features/AddRecipeForm/PTagForm";
import CategoryForm from "@/components/features/AddRecipeForm/CategoryForm";
import IngredientForm from "@/components/features/AddRecipeForm/IngredientForm";
import {
  Container,
  FirstSectionInputWrap,
  ImgButton,
  FirstSection,
  SecondSection,
} from "./styled";
import CookingInfo from "./CookingInfoForm";

const RecipeForm = () => {
  return (
    <Container>
      <FirstSection>
        <FirstSectionInputWrap>
          <PTagForm title="레시피 제목" placeholder=" 예)당근케익" />
          <PTagForm
            title="요리소개"
            placeholder="이 요리의 탄생배경을 적어주세요"
          />
          <CategoryForm title="카테고리" />
          <CookingInfo title="요리정보" />
        </FirstSectionInputWrap>
        <ImgButton type="button">요리 대표 사진을 등록해 주세요</ImgButton>
      </FirstSection>

      <SecondSection>
        <IngredientForm title="재료" />
      </SecondSection>
    </Container>
  );
};

export default RecipeForm;

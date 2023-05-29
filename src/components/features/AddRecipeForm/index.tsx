import PTagForm from "@/components/features/AddRecipeForm/PTagForm";
import CategoryForm from "@/components/features/AddRecipeForm/CategoryForm";
import IngredientForm from "@/components/features/AddRecipeForm/IngredientForm";
import {
  Container,
  FirstSectionInputWrap,
  ImgButton,
  FirstSection,
  SecondSection,
  Br,
  Notice,
  AddButton,
  ThirdSection,
  StepTitle,
  StepExplanation,
  StepForm,
  StepNumber,
  StepTextArea,
  StepImg,
} from "./styled";
import CookingInfo from "./CookingInfoForm";

const AddRecipeForm = () => {
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
      <Br></Br>
      <SecondSection>
        <Notice>
          재료가 남거나 부족하지 않도록 정확한 계량정보를 적어주세요
        </Notice>
        <IngredientForm title="재료" />
        <AddButton type="button">
          <span>+ 추가</span>
        </AddButton>
      </SecondSection>
      <Br></Br>
      <ThirdSection>
        <StepTitle>요리순서</StepTitle>
        <StepExplanation>
          {`요리의 맛이 좌우될 수 있는 중요한 부분은 빠짐없이 적어주세요....`}
        </StepExplanation>
        <StepForm>
          <StepNumber>Step1</StepNumber>
          <StepTextArea>
            소고기는 기름기를 떼고 적당한 크기로 썰어주세요...
          </StepTextArea>
          <StepImg src="" alt="" />
          <button>+ step 추가</button>
        </StepForm>
      </ThirdSection>
    </Container>
  );
};

export default AddRecipeForm;

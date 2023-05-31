// import { userState } from "react";

import PTagForm from "@/components/features/AddRecipeForm/FirstSection/PTagForm";
import CategoryForm from "@/components/features/AddRecipeForm/FirstSection/CategoryForm";
import TextAreaForm from "@/components/features/AddRecipeForm/FirstSection/TextAreaForm";
import CookingInfo from "@/components/features/AddRecipeForm/FirstSection/CookingInfoForm";
// import ImgButton from "@/components/features/AddRecipeForm/FirstSection/ImgButton";
import IngredientForm from "@/components/features/AddRecipeForm/SecondSection/IngredientForm";
import {
  Container,
  FirstSectionInputWrap,
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
  StepPlusButton,
  CompleteTitle,
  CompleteImg,
  CompleteImgWrap,
  SaveButton,
} from "./styled";

const AddRecipeForm = () => {
  // const [selectImage, setSelectedImage] = useState<File | null>(null);
  // const handelImageUpload = (file: File) => {
  //   // 버튼구현하는것부터 선생님한테 물어봐야겠다..
  // };
  return (
    <Container>
      <FirstSection>
        <FirstSectionInputWrap>
          <PTagForm title="레시피 제목" placeholder=" 예)당근케익" />
          <TextAreaForm
            title="요리소개"
            placeholder="이 요리의 탄생배경을 적어주세요"
          />
          <CategoryForm title="카테고리" />
          <CookingInfo title="요리정보" />
        </FirstSectionInputWrap>

        {/* <ImgButton onImageUpload={handelImageUpload}>
          요리 대표 사진을 등록해 주세요
        </ImgButton> */}
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
        </StepForm>
        <StepPlusButton>+ step 추가</StepPlusButton>
        <CompleteTitle>요리완성사진</CompleteTitle>
        <CompleteImgWrap>
          <CompleteImg src="" alt="" />
          <CompleteImg src="" alt="" />
          <CompleteImg src="" alt="" />
          <CompleteImg src="" alt="" />
        </CompleteImgWrap>
        <Br></Br>
        <p>요리팁</p>
        <textarea placeholder="예)고기요리에는 소금보다 설탕을 먼저 넣어야 단맛이 겉돌지 않고 육질이 부드러워요"></textarea>
        <Br></Br>
        <SaveButton>
          <button>저장</button>
          <button>저장 후 공개하기</button>
          <button>취소</button>
        </SaveButton>
      </ThirdSection>
    </Container>
  );
};

export default AddRecipeForm;

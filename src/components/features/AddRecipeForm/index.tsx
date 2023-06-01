// import { userState } from "react";

import PTagForm from "@/components/features/AddRecipeForm/FirstSection/PTagForm";
import CategoryForm from "@/components/features/AddRecipeForm/FirstSection/CategoryForm";
import TextAreaForm from "@/components/features/AddRecipeForm/FirstSection/TextAreaForm";
import CookingInfo from "@/components/features/AddRecipeForm/FirstSection/CookingInfoForm";
import ImgButton from "@/components/features/AddRecipeForm/FirstSection/ImgButton";
import StepForm from "@/components/features/AddRecipeForm/StepForm";
import IngredientForm from "@/components/features/IngredientForm";

import {
  Container,
  FirstSectionInputWrap,
  FirstSection,
  SecondSection,
  Br,
  Notice,
  ThirdSection,
  StepTitle,
  StepExplanation,
  CompleteTitle,
  CompleteImg,
  CompleteImgWrap,
  SaveButton,
} from "./styled";
import { useState } from "react";

interface Step {
  stepDesc: string;
  imgSrc: string;
  id: number;
}

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainImg, setMainImg] = useState<null | {
    file: File;
    preview: string;
  }>(null);
  const [ingredientList, setIngredientList] = useState([
    {
      ingredient: "",
      quantity: "",
    },
  ]);
  const [stepList, setStepList] = useState<Step[]>([
    {
      stepDesc: "",
      imgSrc: "",
      id: Date.now(),
    },
  ]);

  const addStep = () => {
    setStepList((prevStepList) => [
      ...prevStepList,
      { id: Date.now(), stepDesc: "", imgSrc: "" },
    ]);
  };
  const removeStep = (id: number) => {
    setStepList((prevStepList) =>
      prevStepList.filter((step) => step.id !== id)
    );
  };

  const handleSave = () => {
    console.log(title);
  };
  const handleImageUpload = (file: File, index: number) => {
    const imgUrl = URL.createObjectURL(file);
    const newStepList = [...stepList];
    newStepList[index].imgSrc = imgUrl;
    setStepList(newStepList);
  };

  const handleStepDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newStepList = [...stepList];
    newStepList[index].stepDesc = e.target.value;
    setStepList(newStepList);
  };

  return (
    <Container>
      <FirstSection>
        <FirstSectionInputWrap>
          <PTagForm
            title="레시피 제목"
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
            placeholder="예) 당근케익"
          />
          <TextAreaForm
            value={desc}
            onChange={(value) => {
              setDesc(value);
            }}
            title="요리소개"
            placeholder="이 요리의 탄생배경을 적어주세요"
          />
          <CategoryForm title="카테고리" />
          <CookingInfo title="요리정보" />
        </FirstSectionInputWrap>
        <ImgButton
          imgUrl={mainImg?.preview}
          onImageUpload={(file) => {
            setMainImg({
              file,
              preview: URL.createObjectURL(file),
            });
          }}
        ></ImgButton>
      </FirstSection>
      <Br></Br>
      <SecondSection>
        <Notice>
          재료가 남거나 부족하지 않도록 정확한 계량정보를 적어주세요
        </Notice>
        <IngredientForm
          ingredientList={ingredientList}
          onIngredientList={setIngredientList}
        />
      </SecondSection>
      <Br></Br>

      <ThirdSection>
        <StepTitle>요리순서</StepTitle>
        <StepExplanation>
          {`요리의 맛이 좌우될 수 있는 중요한 부분은 빠짐없이 적어주세요....`}
        </StepExplanation>
        <StepForm
          stepList={stepList}
          handleStepDescriptionChange={handleStepDescriptionChange}
          handleImageUpload={handleImageUpload}
          removeStep={removeStep}
          addStep={addStep}
        />
        <Br></Br>

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
          <button
            onClick={() => {
              handleSave();
            }}
          >
            저장
          </button>
          <button>저장 후 공개하기</button>
          <button>취소</button>
        </SaveButton>
      </ThirdSection>
    </Container>
  );
};

export default AddRecipeForm;

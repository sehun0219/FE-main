import PTagForm from "@/components/features/AddRecipeForm/PTagForm";
import CategoryForm from "@/components/features/AddRecipeForm/CategoryForm";
import TextAreaForm from "@/components/features/AddRecipeForm/TextAreaForm";
import CookingInfo from "@/components/features/AddRecipeForm/CookingInfoForm";
import ImgButton from "@/components/features/AddRecipeForm/ImgButton";
import StepForm from "@/components/features/AddRecipeForm/StepForm";
import IngredientForm from "@/components/features/IngredientForm";
import { uploadRecipeImages } from "@/apis/recipe";
import { UserContext } from "@/store/UserContext";

import {
  Container,
  AddRecipeTitle,
  FirstSectionInputWrap,
  FirstSection,
  SecondSection,
  Br,
  Notice,
  ThirdSection,
  StepTitle,
  StepExplanation,
  ForthSection,
  Complete,
  CompleteTitle,
  CompleteImgWrap,
  DummyContainer,
  SaveButton,
  Save,
  Ingredient,
} from "./styled";
import { useState } from "react";

import React, { useContext } from "react";

interface Step {
  stepDesc: string;
  imgSrc: string | File;
  id: number;
}

interface CompletedImg {
  file: File;
  preview: string;
}

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [cookingInfo, setCookingInfo] = useState<string[]>([]);
  const [cookingTip, setCookingTip] = useState("");

  const [mainImg, setMainImg] = useState<null | {
    file: File;
    preview: string;
  }>(null);

  const [completedImgs, setCompletedImgs] = useState<(CompletedImg | null)[]>([
    null,
    null,
    null,
    null,
  ]);
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
  const handleImageUpload = (file: File, index: number) => {
    const imgUrl = URL.createObjectURL(file);
    const newStepList = [...stepList];
    newStepList[index].imgSrc = imgUrl;
    setStepList(newStepList);
  };
  const handleCompletedImageUpload = (file: File, index: number) => {
    const newCompletedImgs = [...completedImgs];
    newCompletedImgs[index] = {
      file,
      preview: URL.createObjectURL(file),
    };
    setCompletedImgs(newCompletedImgs);
  };

  const handleStepDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newStepList = [...stepList];
    newStepList[index].stepDesc = e.target.value;
    setStepList(newStepList);
  };

  const userContextValue = useContext(UserContext);
  const user = userContextValue?.user;
  const handleSave = async () => {
    if (
      title === "" ||
      desc === "" ||
      mainImg === null ||
      stepList.length === 0 ||
      ingredientList.length === 0
    ) {
      alert("Please fill in everything");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("desc", desc);
    if (user?._id) {
      formData.append("creator", user._id);
    } else {
      console.error("User._id is undefined");
    }
    if (mainImg !== null) {
      formData.append("mainImg", mainImg.file);
    }
    formData.append("category", category.join(", "));
    formData.append("cookingInfo", cookingInfo.join(", "));
    formData.append("cookingTip", cookingTip);

    stepList.forEach((step, index) => {
      formData.append(`stepList[${index}][stepDesc]`, step.stepDesc);
      if (step.imgSrc instanceof File) {
        formData.append(`stepImages_${index}`, step.imgSrc); // 각 스텝 이미지를 고유한 필드로 보냅니다
      }
    });

    ingredientList.forEach((ingredient, index) => {
      formData.append(
        `ingredientList[${index}][ingredient]`,
        ingredient.ingredient
      );

      formData.append(
        `ingredientList[${index}][quantity]`,
        ingredient.quantity
      );
    });

    completedImgs.forEach((img, index) => {
      if (img !== null) {
        formData.append(`completedImgs[${index}]`, img.file);
      }
    });

    for (const key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }

    uploadRecipeImages(formData);
  };

  return (
    <Container>
      <AddRecipeTitle>Recipe Registration</AddRecipeTitle>
      <FirstSection>
        <FirstSectionInputWrap>
          <PTagForm
            title="Title"
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
            placeholder="eg. Tomato Pasta"
          />
          <TextAreaForm
            value={desc}
            onChange={(value) => {
              setDesc(value);
            }}
            title="Introduction"
            placeholder="Please write down the background of this dish"
          />
          <CategoryForm
            title="Categories"
            onChange={(value) => setCategory(value)}
          />
          <CookingInfo
            title="Information"
            onChange={(value) => setCookingInfo(value)}
          />
        </FirstSectionInputWrap>

        <ImgButton
          imgUrl={mainImg?.preview}
          onImageUpload={(file) => {
            setMainImg({
              file,
              preview: URL.createObjectURL(file),
            });
          }}
        />
      </FirstSection>
      <Br></Br>
      <SecondSection>
        <Ingredient>Ingredient</Ingredient>
        <Notice>
          Please write down the exact measurement information so that there are
          no leftovers or shortages
        </Notice>

        <IngredientForm
          ingredientList={ingredientList}
          onIngredientList={setIngredientList}
        />
      </SecondSection>
      <Br></Br>

      <ThirdSection>
        <StepTitle>Cooking Step</StepTitle>
        <StepExplanation>
          Please write down every important part of the dish that can affect the
          taste of the dish...
        </StepExplanation>
        <StepForm
          stepList={stepList}
          handleStepDescriptionChange={handleStepDescriptionChange}
          handleImageUpload={handleImageUpload}
          removeStep={removeStep}
          addStep={addStep}
        />
      </ThirdSection>
      <Br></Br>
      <ForthSection>
        <Complete>
          <CompleteTitle>Finished cooking photo</CompleteTitle>
          <CompleteImgWrap>
            {completedImgs.map((img, index) => (
              <ImgButton
                key={index}
                imgUrl={img?.preview}
                onImageUpload={(file) =>
                  handleCompletedImageUpload(file, index)
                }
              />
            ))}
          </CompleteImgWrap>
        </Complete>
      </ForthSection>
      <Br></Br>
      <SaveButton>
        <Save onClick={handleSave}>UpLoad</Save>
      </SaveButton>
    </Container>
  );
};

export default AddRecipeForm;

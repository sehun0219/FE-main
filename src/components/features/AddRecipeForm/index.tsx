import React, { useState } from "react";
import { Title, Container, Label, Input, Button } from "./styled";

const RecipeForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [category, setCategory] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [steps, setSteps] = useState<string[]>([""]);
  const [completeImage, setCompleteImage] = useState("");
  const [cookingTips, setCookingTips] = useState("");
  const [tags, setTags] = useState("");

  const handleUpLoadThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleIngredientsChange = (index: number, value: string) => {
    setIngredients((prev) =>
      prev.map((item, i) => (i === index ? value : item))
    );
  };

  const handleStepsChange = (index: number, value: string) => {
    setSteps((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const handleSubmit = () => {
    // 여기에서 데이터를 저장하는 코드를 작성합니다.
  };

  const handleCancel = () => {
    // 폼을 초기화합니다.
    setTitle("");
    setSelectedFile(null);
    setIntroduction("");
    setYoutubeUrl("");
    setCategory("");
    setServingSize("");
    setIngredients(["", "", "", "", "", ""]);
    setSteps([""]);
    setCompleteImage("");
    setCookingTips("");
    setTags("");
  };

  return (
    <Container>
      <Title>Recipe Title</Title>
      <Input
        type="text"
        value={title}
        placeholder="e.g Tomato Pasta So Delicious, I'd Almost Toss My Fork!"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>Add Thumbnail</Button>
      <Input type="file" onChange={handleUpLoadThumbnail} />

      <Label>Short comment of your dish</Label>
      <Input
        placeholder="Please explain the origin of this dish, e.g. it's a quick dish when you're hungry at home alone! "
        type="text"
        value={introduction}
        onChange={(e) => setIntroduction(e.target.value)}
      />
      <Label>Youtube URL</Label>
      <Input
        type="text"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
      />
      <Label>Category</Label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Vegetables and fruit</option>
        <option>Grain foods</option>
        <option>Milk and milk products</option>
        <option>Protein foods</option>
      </select>

      <Label>Cooking information</Label>
      <select
        value={servingSize}
        onChange={(e) => setServingSize(e.target.value)}
      >
        <option hidden>How many servings</option>
        <option>One serving</option>
        <option>Two serving</option>
        <option>More than three serving</option>
      </select>
      <select
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      >
        <option hidden>Cooking time</option>
        <option>Within 5 minutes</option>
        <option>Within 10 minutes</option>
        <option>Within 15 minutes</option>
        <option>Within 20 minutes</option>
        <option>Within 30 minutes</option>
        <option>Within 60 minutes</option>
        <option>More than 1 hour</option>
      </select>
      <Label>Ingredients</Label>
      {ingredients.map((ingredient, i) => (
        <Input
          key={i}
          type="text"
          value={ingredient}
          onChange={(e) => handleIngredientsChange(i, e.target.value)}
        />
      ))}
      <Button onClick={() => setIngredients((prev) => [...prev, ""])}>
      + Add ingredients 

      
      </Button>
      {steps.map((step, i) => (
        <div key={i}>
          <Label>요리 순서 {i + 1}</Label>
          <Input
            type="text"
            value={step}
            onChange={(e) => handleStepsChange(i, e.target.value)}
          />
          <Button>사진 업로드</Button>
        </div>
      ))}
      <Button onClick={() => setSteps((prev) => [...prev, ""])}>
        순서 추가
      </Button>
      <Label>요리 완성 사진</Label>
      <Button>사진 업로드</Button>
      <Label>요리 팁</Label>
      <Input
        type="text"
        value={cookingTips}
        onChange={(e) => setCookingTips(e.target.value)}
      />
      <Label>태그</Label>
      <Input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <Button onClick={handleSubmit}>저장하기</Button>
      <Button onClick={handleCancel}>취소하기</Button>
      <Button onClick={handleSubmit}>공개하기</Button>
    </Container>
  );
};

export default RecipeForm;

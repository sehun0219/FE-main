import { useState } from "react";
import { Title, CategoryContainer, Select } from "./styled";

interface CategoryFormProps {
  title: string;
  onChange: (value: string[]) => void;
}

const CategoryForm = ({ title, onChange }: CategoryFormProps) => {
  const [selectedOptions, setSelectedOptions] = useState(["", "", ""]);

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = event.target.value;
    setSelectedOptions(newOptions);
    onChange(newOptions);
  };

  return (
    <CategoryContainer>
      <Title>{title}</Title>
      <Select id="cookingType1" onChange={(event) => handleChange(event, 0)}>
        <option value="hidden">종류별</option>
        <option value="value1_1">에피타이저</option>
        <option value="value1_2">매인디쉬</option>
        <option value="value1_3">누들</option>
        <option value="value1_4">덤플링</option>
        <option value="value1_5">퓨전</option>
        <option value="value1_6">셀러드</option>
        <option value="value1_7">스프</option>
        <option value="value1_8">스낵</option>
        <option value="value1_9">티/드링크</option>
      </Select>
      <Select id="cookingType2" onChange={(event) => handleChange(event, 1)}>
        <option value="hidden">상황별</option>
        <option value="value2_1">데일리</option>
        <option value="value2_2">패스트푸드</option>
        <option value="value2_3">이벤트</option>
        <option value="value2_4">다이어트푸드</option>
        <option value="value2_5">런치박스</option>
      </Select>
      <Select id="cookingType3" onChange={(event) => handleChange(event, 2)}>
        <option value="hidden">재료별</option>
        <option value="value3_1">비프</option>
        <option value="value3_2">치킨</option>
        <option value="value3_3">포크</option>
        <option value="value3_4">베지</option>
        <option value="value3_5">데어리</option>
        <option value="value3_6">푸르츠</option>
        <option value="value3_7">견과류</option>
      </Select>
    </CategoryContainer>
  );
};

export default CategoryForm;

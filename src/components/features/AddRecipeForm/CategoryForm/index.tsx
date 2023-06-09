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
        <option value="에피타이저">에피타이저</option>
        <option value="매인디쉬">매인디쉬</option>
        <option value="누들">누들</option>
        <option value="덤플링">덤플링</option>
        <option value="퓨전">퓨전</option>
        <option value="셀러드">셀러드</option>
        <option value="스프">스프</option>
        <option value="스낵">스낵</option>
        <option value="티/드링크">티/드링크</option>
      </Select>
      <Select id="cookingType2" onChange={(event) => handleChange(event, 1)}>
        <option value="hidden">상황별</option>
        <option value="데일리">데일리</option>
        <option value="패스트푸드">패스트푸드</option>
        <option value="이벤트">이벤트</option>
        <option value="다이어트푸드">다이어트푸드</option>
        <option value="런치박스">런치박스</option>
      </Select>
      <Select id="cookingType3" onChange={(event) => handleChange(event, 2)}>
        <option value="hidden">재료별</option>
        <option value="비프">비프</option>
        <option value="치킨">치킨</option>
        <option value="포크">포크</option>
        <option value="베지">베지</option>
        <option value="데어리">데어리</option>
        <option value="푸르츠">푸르츠</option>
        <option value="견과류">견과류</option>
      </Select>
    </CategoryContainer>
  );
};

export default CategoryForm;

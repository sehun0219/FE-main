import { Title, CookingInfoContainer, Select } from "./styled";

interface CookingInfoProps {
  title: string;
  onChange: (value: string[]) => void;
}

const CookingInfo = ({ title, onChange }: CookingInfoProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onChange(selectedValues);
  };

  return (
    <CookingInfoContainer>
      <Title>{title}</Title>
      <Select id="servingSize" onChange={handleSelectChange}>
        <option value="hidden">인원</option>
        <option value="value1_1">1인분</option>
        <option value="value1_2">2인분</option>
        <option value="value1_3">3인분</option>
        <option value="value1_4">4인분 이상</option>
      </Select>
      <Select id="cookingTime" onChange={handleSelectChange}>
        <option value="hidden">시간</option>
        <option value="value2_1">10 min</option>
        <option value="value2_2">15 min</option>
        <option value="value2_3">20 min</option>
        <option value="value2_4">30 min</option>
        <option value="value2_5">More than an hour</option>
      </Select>
      <Select id="difficulty" onChange={handleSelectChange}>
        <option value="hidden">난이도</option>
        <option value="value3_1">아무나</option>
        <option value="value3_2">노말</option>
        <option value="value3_3">하드</option>
        <option value="value3_4">나이트메어</option>
      </Select>
    </CookingInfoContainer>
  );
};

export default CookingInfo;

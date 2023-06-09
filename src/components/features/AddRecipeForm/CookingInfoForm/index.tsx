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
        <option value="1인분">1인분</option>
        <option value="2인분">2인분</option>
        <option value="3인분">3인분</option>
        <option value="4인분 이상">4인분 이상</option>
      </Select>
      <Select id="cookingTime" onChange={handleSelectChange}>
        <option value="hidden">시간</option>
        <option value="10 min">10 min</option>
        <option value="15 min">15 min</option>
        <option value="20 min">20 min</option>
        <option value="30 min">30 min</option>
        <option value="More than an hour">More than an hour</option>
      </Select>
      <Select id="difficulty" onChange={handleSelectChange}>
        <option value="hidden">난이도</option>
        <option value="아무나">아무나</option>
        <option value="노말">노말</option>
        <option value="하드">하드</option>
        <option value="나이트메어">나이트메어</option>
      </Select>
    </CookingInfoContainer>
  );
};

export default CookingInfo;

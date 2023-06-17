import { Title, SelectBox, CookingInfoContainer, Select } from "./styled";

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
      <SelectBox>
        <Select id="servingSize" onChange={handleSelectChange}>
          <option value="hidden">Serving size</option>
          <option value="For one">For one</option>
          <option value="For Two">For Two</option>
          <option value="For Three">For Three</option>
          <option value="More than Four">More than Four</option>
        </Select>
        <Select id="cookingTime" onChange={handleSelectChange}>
          <option value="hidden">Time</option>
          <option value="10 min">10 min</option>
          <option value="15 min">15 min</option>
          <option value="20 min">20 min</option>
          <option value="30 min">30 min</option>
          <option value="More than an hour">More than an hour</option>
        </Select>
        <Select id="difficulty" onChange={handleSelectChange}>
          <option value="hidden">Difficulty</option>
          <option value="Anyone">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </Select>
      </SelectBox>
    </CookingInfoContainer>
  );
};

export default CookingInfo;

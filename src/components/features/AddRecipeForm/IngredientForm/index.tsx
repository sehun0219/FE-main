import { Title, Container, Notice, TextBox } from "./styled";

interface IngredientFormProps {
  title: string;
  placeholder?: string;
  onChange?: (text: string) => void;
}

const IngredientForm = ({
  title,
  placeholder = "",
  onChange = () => null,
}: IngredientFormProps) => {
  return (
    <Container>
      <Notice>
        재료가 남거나 부족하지 않도록 정확한 계량정보를 적어주세요
      </Notice>
      <Title>{title}</Title>
      <TextBox
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type="text"
        placeholder={placeholder}
      />
      <TextBox
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type="text"
        placeholder={placeholder}
      />
      <div className="btn_add">
        <button type="button">
          <span>+ 추가</span>
        </button>
      </div>
    </Container>
  );
};

export default IngredientForm;

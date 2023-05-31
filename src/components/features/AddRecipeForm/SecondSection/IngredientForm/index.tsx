import { Title, Container, TextBox, AddTextBox } from "./styled";

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
      <Title>{title}</Title>
      <AddTextBox>
        <TextBox
          onChange={(e) => {
            onChange(e.target.value);
          }}
          type="text"
          placeholder={placeholder}
        />
      </AddTextBox>
    </Container>
  );
};

export default IngredientForm;

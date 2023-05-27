import { Title, TextBox, Container } from "./styled";

interface PTagFormProps {
  title: string;
  placeholder?: string;
  onChange?: (text: string) => void;
}

const PTagForm = ({
  title,
  placeholder = "",
  onChange = () => null,
}: PTagFormProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TextBox
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type="text"
        placeholder={placeholder}
      />
    </Container>
  );
};

export default PTagForm;

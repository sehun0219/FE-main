import { Title, TextBox, Container } from "./styled";

interface TextAreaFormProps {
  title: string;
  placeholder?: string;
  onChange?: (text: string) => void;
}

const TextAreaForm = ({
  title,
  placeholder = "",
  onChange = () => null,
}: TextAreaFormProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TextBox
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default TextAreaForm;

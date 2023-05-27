import { useLoginForm } from "./useLoginForm";
import {
  FormContainer,
  FormTitle,
  SubmitButton,
  CheckboxContainer,
  CheckboxLabel,
  FindLoginInfo,
} from "./styled";
import FormInput from "@/components/common/FormInput";

// http://localhost:8080/user/login

const LoginForm = () => {
  const {
    handleSubmit,
    email,
    setEmail,
    password,
    showPassword,
    setPassword,
    setShowPassword,
    links,
  } = useLoginForm();
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>
      <FormInput
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <FormInput
        value={password}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <CheckboxContainer>
        <input
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
        />
        <CheckboxLabel>Show password</CheckboxLabel>
      </CheckboxContainer>
      <SubmitButton type="submit">Enter</SubmitButton>
      <FindLoginInfo>
        {links.map((link) => (
          <p key={link.text}>
            <a href={link.href}>{link.text}</a>
          </p>
        ))}
      </FindLoginInfo>
    </FormContainer>
  );
};

export default LoginForm;

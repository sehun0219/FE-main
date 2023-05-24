import {
  FormContainer,
  FormTitle,
  SubmitButton,
  PasswordHint,
  Exist,
} from "./styled";

import FormInput from "@/components/common/FormInput";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUserSignUp } from "@/apis/user";
import { UserContext } from "@/store/UserContext";

// http://localhost:8080/user/sing-up
const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const passWordHint = `Your password should be at least 8 characters long and include a combination of letters, numbers, and special characters.`;
  const userContext = useContext(UserContext);
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

  // 비번 유효성검사
  const isValidPassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  // name이 바뀔때 입력된 값으로 name을 바꿔줌
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // 비번이 바뀔때 비번을 바꿔줌, 유효성검사도함
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    setIsPasswordValid(isValidPassword(password)); // isValidPassword는 비밀번호 유효성 검사 함수
  };
  // 입력이되면 디폴트로 유지, 백앤드로 sign up data를 보냄,
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await postUserSignUp({ name, password, email });
      if (!data) throw new Error("Login failed");
      userContext?.login(data);
      alert("Login successful");
      navigate("/");
    } catch (err: any) {
      alert(`${err.message}`);
      console.error(err);
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Sign Up</FormTitle>
      <FormInput
        value={name}
        type="text"
        placeholder="Name"
        onChange={handleChangeName}
      />

      <FormInput
        value={email}
        type="text"
        placeholder="Email"
        onChange={handleEmail}
      />
      <FormInput
        value={password}
        type="password"
        placeholder="Password"
        onChange={handleChangePassword}
      />
      {!isPasswordValid && <PasswordHint>{passWordHint}</PasswordHint>}
      <SubmitButton type="submit">Sign Up</SubmitButton>
      <Exist>
        {" "}
        <a href="/login"> 이미 계정이 있나요? </a>{" "}
      </Exist>
    </FormContainer>
  );
};

export default SignUpForm;

import axios from "axios";
import { LoginData, User, SignUpData } from "@/interface/user";

export const postUserLogin = async (loginData: LoginData) => {
  try {
    const res = await axios.post<{
      user: User;
      token: string;
    }>("http://localhost:8080/user/login", loginData);
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const postUserSignUp = async (signUpData: SignUpData) => {
  try {
    const res = await axios.post<{
      user: User;
      token: string;
    }>("http://localhost:8080/user/sign-up", signUpData);
    // 추가적인 작업: 응답 처리, 로그인 페이지로 리디렉션
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

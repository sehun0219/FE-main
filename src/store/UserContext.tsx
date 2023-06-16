import { createContext, ReactNode, useState, useEffect } from "react";
import { User } from "@/interface/user";

interface UserContextValue {
  user: User | null;
  token: string | null;
  login: ({ user, token }: { user: User; token: string }) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const userStorageItem = window.localStorage.getItem("userInfo") ?? null;
    const token = window.localStorage.getItem("tokenInfo") ?? null;

    if (userStorageItem) {
      const user = JSON.parse(userStorageItem);
      console.log(user);
      if (user?._id && token) {
        setUser(user);
        setToken(token);
      }
    }
  }, []);

  const value = {
    user,
    token,
    login: ({ user, token }: { user: User; token: string }) => {
      setUser(user);
      setToken(token);
      window.localStorage.setItem("userInfo", JSON.stringify(user));
      window.localStorage.setItem("tokenInfo", JSON.stringify(token));
    },
    logout: () => {
      setUser(null);
      setToken(null);
      window.localStorage.removeItem("userInfo");
      window.localStorage.removeItem("tokenInfo");
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

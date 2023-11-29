import { createContext, useState } from "react";

export type User = {
  id: string | null;
  isAuthenticated: boolean;
  promotions: Promotion[];
  activePromotion: Promotion | "";
};

export type Promotion = "10OFF" | "20OFF" | "30OFF";

interface AuthProps {
  login: () => void;
  logout: () => void;
  signup: () => void;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext<AuthProps>({
  login: () => {},
  logout: () => {},
  signup: () => {},
  user: {
    id: null,
    isAuthenticated: false,
    promotions: [],
    activePromotion: "",
  },
  setUser: () => {},
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    id: null,
    isAuthenticated: false,
    promotions: [],
    activePromotion: "",
  });

  const login = async () => {
    setUser({
      id: "test",
      isAuthenticated: true,
      promotions: ["10OFF"],
      activePromotion: "",
    });
  };

  const logout = async () => {
    setUser({
      id: null,
      isAuthenticated: false,
      promotions: [],
      activePromotion: "",
    });
  };

  const signup = async () => {
    setUser({
      id: "test",
      isAuthenticated: true,
      promotions: [],
      activePromotion: "",
    });
  };

  return (
    <AuthContext.Provider value={{ login, logout, signup, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

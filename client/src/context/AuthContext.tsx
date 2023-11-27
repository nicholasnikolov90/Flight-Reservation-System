import { createContext, useState } from "react";

interface AuthProps {
  login: () => void;
  logout: () => void;
  signup: () => void;
  user: {
    id: string | null;
    isAuthenticated: boolean;
  };
}

export const AuthContext = createContext<AuthProps>({
  login: () => {},
  logout: () => {},
  signup: () => {},
  user: {
    id: null,
    isAuthenticated: false,
  },
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<{
    id: string | null;
    isAuthenticated: boolean;
  }>({
    id: null,
    isAuthenticated: false,
  });

  const login = async () => {
    setUser({ id: "test", isAuthenticated: true });
  };

  const logout = async () => {
    setUser({ id: null, isAuthenticated: false });
  };

  const signup = async () => {
    setUser({ id: "test", isAuthenticated: true });
  };

  return (
    <AuthContext.Provider value={{ login, logout, signup, user }}>
      {children}
    </AuthContext.Provider>
  );
};

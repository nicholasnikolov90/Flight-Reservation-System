import { createContext, useState } from "react";

export type User = {
  id: string | null;
  isAuthenticated: boolean;
  promotions: Promotion[];
  activePromotion: Promotion | "";
};

export type Promotion = "10OFF" | "20OFF" | "30OFF";

interface AuthProps {
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
  signup: ({
    username,
    password,
    firstName,
    lastName,
    address,
  }: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
  }) => Promise<void>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
export const AuthContext = createContext<AuthProps>({
  login: ({ username, password }: { username: string; password: string }) => {
    return Promise.resolve();
  },
  logout: () => {},
  signup: ({
    username,
    password,
    firstName,
    lastName,
    address,
  }: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
  }) => {
    return Promise.resolve();
  },
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

  // const login = async () => {
  //   setUser({
  //     id: "test",
  //     isAuthenticated: true,
  //     promotions: ["10OFF"],
  //     activePromotion: "",
  //   });
  // };
  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const res = await fetch("http://127.0.0.1:8000/app/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: username,
        pass_word: password,
      }),
    });
    if (res.ok) {
      alert(`Signed in as ${username}`);
      setUser({
        id: username,
        isAuthenticated: true,
        promotions: ["10OFF"],
        activePromotion: "",
      });
    } else {
      alert("Check username/password");
    }
  };

  const logout = async () => {
    setUser({
      id: null,
      isAuthenticated: false,
      promotions: [],
      activePromotion: "",
    });
  };

  const signup = async ({
    username,
    password,
    firstName,
    lastName,
    address,
  }: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
  }) => {
    const res = await fetch(
      "http://127.0.0.1:8000/app/registereduser-create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: username,
          pass_word: password,
          first_name: firstName,
          last_name: lastName,
          address: address,
        }),
      }
    );
    if (res.ok) {
      alert("User created");
      setUser({
        id: username,
        isAuthenticated: true,
        promotions: ["10OFF"],
        activePromotion: "",
      });
    } else {
      alert("User could not be created");
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, signup, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

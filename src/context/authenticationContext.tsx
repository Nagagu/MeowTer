import React, { createContext, useContext, useState } from "react";
import { UserType } from "../Types/Types";

export type AuthContextType = {
  loggedUser: UserType;
};

interface props {
  children: JSX.Element | JSX.Element[];
}
const initialLoggedUser = { id: 7, isFollowed: false, userName: "NatCat" }; // I put this user as a fake service authentication
const AuthContext = createContext<AuthContextType>({
  loggedUser: initialLoggedUser,
});

export const AuthContextProvider = ({ children }: props) => {
  const [loggedUser] = useState<UserType>(initialLoggedUser);

  return (
    <AuthContext.Provider value={{ loggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext can only be used inside useAuthContext");
  }
  return context;
};

export default AuthContext;

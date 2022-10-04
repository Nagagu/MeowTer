import { createContext, Dispatch, SetStateAction, useState } from "react";
import { UserType } from "../Types/Types";

export type UserContextType = {
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  selectedUser: UserType | undefined;
  setSelectedUser: Dispatch<SetStateAction<UserType | undefined>>;
};

interface props {
  children: JSX.Element | JSX.Element[];
}
const UsersContext = createContext<UserContextType>({
  users: [],
  setUsers: (u) => u,
  selectedUser: undefined,
  setSelectedUser: (s) => s,
});

export const UsersContextProvider = ({ children }: props) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserType>();

  return (
    <UsersContext.Provider
      value={{ users, setUsers, selectedUser, setSelectedUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;

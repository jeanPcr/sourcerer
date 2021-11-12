import React, { useContext, useState } from "react";
import { User } from "../types/user.type";

export interface UserContextType {
  currentUser: User;
  setCurrentUser: (data: User) => void;
}
const USER_DEFAULT = {
  currentUser: {
    id: "",
    login: "",
    bio: "",
    avatarUrl: "",
    company: "",
    followers: { totalCount: 0 },
    following: { totalCount: 0 },
    commits: { totalCount: 0 },
    organization: { location: "" },
    location: "",
    name: "",
    repositories: {
      totalCount: 0,
    },
  },
  setCurrentUser: () => {},
  repositories: {},
  setRepositories: () => {},
};
export const UserContext = React.createContext<UserContextType>(USER_DEFAULT);

export const UserProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User>(
    USER_DEFAULT.currentUser
  );
  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

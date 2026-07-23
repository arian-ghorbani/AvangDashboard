import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UsersContext = createContext();

function UsersProvider({ children }) {
  const [allUsers, setAllUsers, isLoading, addUser, removeUser, updateUser] =
    useLocalStorage("users", []);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <UsersContext.Provider
      value={{
        allUsers,
        setAllUsers,
        isLoading,
        addUser,
        removeUser,
        updateUser,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;

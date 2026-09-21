import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UsersContext = createContext();

function UsersProvider({ children }) {
  const [allUsers, setAllUsers, isLoading, addUser, removeUser, updateUser] =
    useLocalStorage("users", []);

  return (
    <UsersContext.Provider
      value={{
        allUsers,
        setAllUsers,
        isLoading,
        addUser,
        removeUser,
        updateUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;

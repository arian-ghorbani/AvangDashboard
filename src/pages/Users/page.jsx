import { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";
import IsEmpty from "../../components/IsEmpty";
import { useSearch } from "/src/context/SearchProvider";

function Users() {
  const { allUsers, setAllUsers, isLoading, addUser } =
    useContext(UsersContext);
  const { searchQuery } = useSearch();

  return allUsers.length > 0 ? (
    <div>Users</div>
  ) : (
    <IsEmpty>مشتری برای نمایش وجود ندارد!</IsEmpty>
  );
}

export default Users;

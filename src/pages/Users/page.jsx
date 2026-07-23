import { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";
import IsEmpty from "../../components/IsEmpty";

function Users() {
  const { allUsers, setAllUsers, isLoading, searchQuery, addUser } =
    useContext(UsersContext);

  return allUsers.length > 0 ? (
    <div>Users</div>
  ) : (
    <IsEmpty>کاربری برای نمایش وجود ندارد!</IsEmpty>
  );
}

export default Users;

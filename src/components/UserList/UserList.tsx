import { useUsers } from "../../hooks/useUsers";

export const UserList = () => {
  const users = useUsers();

  if (users === undefined) {
    return <p>loading...</p>;
  }

  if (users.length === 0) {
    return <p>ユーザーが存在しません</p>;
  }

  return <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
};

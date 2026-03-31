import { useUsers } from "../../hooks/useUsers";
import { UserCard } from "../UserCard";

export const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

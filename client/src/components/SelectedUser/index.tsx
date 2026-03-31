import { useUserById } from "../../hooks/useUserById";

export const SelectedUser = () => {
  const { user, loading, error } = useUserById("2");

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Chosen User</h2>

      {user ? (
        <p>
          {user.name}, {user.age} years. {user.isMarried ? "Yes" : "No"}{" "}
          married.
        </p>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

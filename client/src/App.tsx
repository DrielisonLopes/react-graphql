import "./App.css";
import { useUserById } from "./hooks/useUserById";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { users, loading, error } = useUsers();
  const { user, loading: userLoading, error: userError } = useUserById("2");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (userError) return <p>Error: {userError.message}</p>;

  return (
    <>
      <h1>Home</h1>

      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Is Married: {user.isMarried ? "Yes" : "No"}</p>
        </div>
      ))}
      <br />

      <h2>Chosen User</h2>
      {userLoading ? (
        <p>Loading user...</p>
      ) : user ? (
        <p>
          {user.name}, {user.age} years. {user.isMarried ? "Yes" : "No"}{" "}
          married.
        </p>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
}

export default App;

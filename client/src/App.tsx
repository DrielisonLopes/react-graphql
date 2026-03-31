import "./App.css";
import { useQuery } from "@apollo/client/react";
import { GET_USER_BY_ID, GET_USERS } from "./graphql/queries/userQueries";
import type { GetUserByIdData, GetUsersData } from "./types/user";

function App() {
  const {
    loading: getUsersLoading,
    error: getUsersError,
    data: getUsersData,
  } = useQuery<GetUsersData>(GET_USERS);
  const {
    loading: getUserByIdLoading,
    error: getUserByIdError,
    data: getUserByIdData,
  } = useQuery<GetUserByIdData, { id: string }>(GET_USER_BY_ID, {
    variables: { id: "2" },
  });

  if (getUsersLoading) return <p>Loading...</p>;
  if (getUsersError) return <p>Error: {getUsersError.message}</p>;
  if (getUserByIdError) return <p>Error: {getUserByIdError.message}</p>;

  return (
    <>
      <h1>Home</h1>
      <h2>Users</h2>
      <div>
        {getUsersData?.getUsers.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Is Married: {user.isMarried ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>

      <br />

      <h2>Chosen User</h2>
      <div>
        {getUserByIdLoading ? (
          <p>Loading user...</p>
        ) : getUserByIdData?.getUserById ? (
          <div>
            <p>
              {getUserByIdData.getUserById.name},{" "}
              {getUserByIdData.getUserById.age} years.{" "}
              {getUserByIdData.getUserById.isMarried ? "Yes" : "No"} married.
            </p>
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </>
  );
}

export default App;

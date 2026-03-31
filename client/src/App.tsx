import "./App.css";
import { CreateUserForm } from "./components/CreateUserForm";
import { UserList } from "./components/UserList";
import { SelectedUser } from "./components/SelectedUser";

function App() {
  return (
    <>
      <h1>Home</h1>

      <CreateUserForm />
      <UserList />
      <SelectedUser />
    </>
  );
}

export default App;

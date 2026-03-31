import type { User } from "../../types/user";

interface Props {
  user: User;
}

export const UserCard = ({ user }: Props) => {
  return (
    <div className="card">
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Is Married: {user.isMarried ? "Yes" : "No"}</p>
    </div>
  );
};

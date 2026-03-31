import { useState } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";

export const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

  const { createUser, loading } = useCreateUser();

  const handleSubmit = async () => {
    if (!name.trim()) return;

    await createUser({ name, age, isMarried });

    setName("");
    setAge(0);
    setIsMarried(false);
  };

  return (
    <div>
      <h2>Create User</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <label>
        <input
          type="checkbox"
          checked={isMarried}
          onChange={(e) => setIsMarried(e.target.checked)}
        />
        Married
      </label>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Creating..." : "Create"}
      </button>
    </div>
  );
};

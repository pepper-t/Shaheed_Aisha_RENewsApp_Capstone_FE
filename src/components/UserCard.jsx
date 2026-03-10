

import axios from "axios";
import { useState } from "react";
import EditForm from "../components/EditForm";

export default function UserCard({ char, setCharacters }) {
  const [edit, setEdit] = useState(false);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:3000/api/users/${char._id}`);

      setCharacters((prev) => prev.filter((el) => el._id !== char._id));

      alert("Successful deletion");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }

  return (
    <>
      {edit ? (
        <EditForm char={char} setEdit={setEdit} setCharacters={setCharacters} />
      ) : (
        <div className="card">
          <h2>{char.name}</h2>
          <p>{char.email}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
}


import { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

export default function UserHome() {
  const [characters, setCharacters] = useState(null);

  async function handleFetch(e) {
    try {
      let res = await axios.get("http://localhost:3000/api/users");

      setCharacters(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="userhome">
      {characters ? (
        characters.map((char) => (
          <UserCard key={char._id} char={char} setCharacters={setCharacters} />
        ))
      ) : (
        <button onClick={handleFetch}>Fetch Data</button>
      )}
    </div>
  );
}
import { useState } from "react";
import axios from "axios";


export default function EditForm({ char, setEdit, setCharacters }) {
  const [formData, setFormData] = useState({
    name: char.name,
    email: char.email,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      //Make a copy
      let copy = { ...formData, [e.target.name]: e.target.value };
      //Attempt to update in RealEstateNews_SignUps DB
      let res = await axios.put(
        `http://localhost:3000/api/users/${char._id}`,
        copy,
      );



      // Update state with updated object
       setCharacters((c) =>
        c.map((char) => {
          if (char._id === res.data._id) return res.data;
          else return char;
        }),
      );

// Toggle back to card view
      setEdit(false);
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  }

  return (
    <fieldset style={{ textAlign: "center" }}>
      <legend>Edit Registration</legend>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChange}
            value={formData.name}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            value={formData.email}
            required
          />
        </label>
        <br />
        <input type="submit" value="Save" />
      </form>
    </fieldset>
  );
}

/*THIS WORKS --ABOVE IS SAME COPY
import { useState } from "react";
import axios from "axios";

export default function EditForm({ char, setEdit, setCharacters }) {
  const [formData, setFormData] = useState({
    name: char.name,
    email: char.email,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      let res = await axios.put(
        `http://localhost:3000/api/users/${char._id}`,
        formData
      );

      setCharacters((prev) =>
        prev.map((u) => (u._id === res.data._id ? res.data : u))
      );

      setEdit(false);
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  }

  return (
    <fieldset style={{ textAlign: "center" }}>
      <legend>Edit Registration</legend>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChange}
            value={formData.name}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            value={formData.email}
            required
          />
        </label>
        <br />
        <input type="submit" value="Save" />
      </form>
    </fieldset>
  );
}
*/

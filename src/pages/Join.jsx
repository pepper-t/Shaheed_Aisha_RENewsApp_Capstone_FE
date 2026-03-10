


import { useState } from "react";
import axios from "axios";
import UserHome from '../components/UserHome.jsx';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
     
    e.preventDefault();
    try {

      //Manipulate data to final state

      let copy = { ...formData };
      
    let res = await axios.post("http://localhost:3000/api/users", copy);
 
      setFormData({ name: "", email: "" }); // Reset
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }

  }

  return (
    <div className="createForm">
      <UserHome></UserHome>
      <h1>
            Get FREE Access to a Huge Treasure Trove of Real Estate Investing
            Know-How!
          </h1>
          <br />
          <h3>Complete form below to join</h3>
          <br />
      <fieldset style={{ textAlign: "center" }}>
        <legend>
          Register
        </legend>
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
          <input type="submit" value="I Want My FREE Offer NOW!!" />
        </form>
      </fieldset>
    </div>
  );
}





/*
import { useState } from "react";
import axios from "axios";
//import '../components/createForm.css';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
     
    e.preventDefault();
    try {

    let res = await axios.post("http://localhost:3000/api/users", formData);
 
      setFormData({ name: "", email: "" }); // Reset
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }

  }

  return (
    <div className="createForm">
      <h1>
            Get FREE Access to a Huge Treasure Trove of Real Estate Investing
            Know-How!
          </h1>
          <br />
          <h3>Complete form below to join</h3>
          <br />
      <fieldset style={{ textAlign: "center" }}>
        <legend>
          Regiser
        </legend>
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
          <input type="submit" value="I Want My FREE Offer NOW!!" />
        </form>
      </fieldset>
    </div>
  );
}
*/
/* I updated from encyclopedia CharterRoutes.js class project
import { useState } from "react";
import axios from "axios";
import SubscriberList from "../components/SubscriberList.jsx";

export default function HomePage() {
  const [subscribers, setSubscribers] = useState(null);

  async function handleFetch(e) {
    try {
      let res = await axios.get("http://localhost:3000/api/subscr");

      setSubscribers(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="greetings">
      {subscribers ? (
        subscribers.map((subscr) => (
          <CharCard key={char._id} char={char} setCharacters={setCharacters} />
        ))
      ) : (
        <button onClick={handleFetch}>Fetch Data</button>
      )}
    </div>
  );
}

*/

/* SAMPLE FORM CODE

import '../components/styles.css';  

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setStatus("❌ Failed to send email. Server error.");
    }
  };

  return (
      
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <div className="join">
      <h1>FREE Report: 5 Ways to Spot & Avoid Fake Gurus! </h1><br />
      <h3>Complete form below to subscribe</h3><br />
    </div>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Give me FREE Access!</button>
      <p>{status}</p>
    </form>
  );
}


*/

/*export default function Contact() {
  return (
    <div className="contact">
      <h1>FREE Report: 5 Ways to Spot & Avoid Fake Gurus! </h1><br />
      <h3>Complete form below to subscribe</h3>
    </div>
  );
}
  */

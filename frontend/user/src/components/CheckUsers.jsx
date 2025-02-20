import React, { useState } from "react";
import axios from "axios";

const CheckUsers = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/users/check?name=${name}`
      );
      
      if (response.data.exists) {
        setMessage("Name exists in the database!");
      } else {
        setMessage("Name not found.");
      }
    } catch (error) {
      console.error("Error checking name:", error);
      setMessage("Error checking name. Please try again.");
    }
  };

  return (
    <div>
      <h2>Check name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleCheckUser}>Check</button>
      <p>{message}</p>
    </div>
  );
};

export default CheckUsers;

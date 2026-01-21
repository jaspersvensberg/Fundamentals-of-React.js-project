import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ onAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return alert("Name and phone are required");
    onAdd({ id: Date.now().toString(), name, phone, email, address });
    navigate("/contacts");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Add Contact</h2>
      <input placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <br />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
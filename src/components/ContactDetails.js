import React from "react";
import { useParams } from "react-router-dom";

const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === id);

  if (!contact) return <p style={{ padding: "20px" }}>Contact not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{contact.name}</h2>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Address:</strong> {contact.address}</p>
    </div>
  );
};

export default ContactDetails;
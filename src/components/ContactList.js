import React from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => (
  <div style={{ padding: "20px" }}>
    <h2>Contact List</h2>
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} style={{ marginBottom: "5px" }}>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link> - {contact.phone}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
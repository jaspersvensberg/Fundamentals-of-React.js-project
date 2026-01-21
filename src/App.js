import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import NotFound from "./pages/NotFound";
import initialContacts from "./data/initialContacts";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => setContacts([...contacts, newContact]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddContact onAdd={addContact} />} />
        <Route path="/contacts" element={<ContactList contacts={contacts} />} />
        <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
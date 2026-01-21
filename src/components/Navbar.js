import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
    <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
    <Link to="/add-contact" style={{ marginRight: "10px" }}>Add Contact</Link>
    <Link to="/contacts">Contact List</Link>
  </nav>
);

export default Navbar;
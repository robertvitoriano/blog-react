import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];
  return (
    <nav className="site-navigation">
      <Link to="/" exact className="logo">
        My React Blog
      </Link>
      <ul>
        {navLinks.map((link, index) => (
          <li key={link}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

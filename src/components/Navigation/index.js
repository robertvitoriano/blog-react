import React, { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
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

export default function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);

    const screenClickedRef = useRef(false);

    useEffect(() => {
      document.addEventListener("click", () => {
        screenClickedRef.current = !screenClickedRef.current;
        setMenuActive(screenClickedRef.current);
      });
    }, []);
  
  return (
    <nav className="site-navigation">
      <Link to="/" className="logo">
        My React Blog
      </Link>
      <div className={`menu-content-container ${menuActive ? "active" : ""}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={60}
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      />
    </nav>
  );
}

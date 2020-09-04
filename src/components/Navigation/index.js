import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Avatar} from 'antd';
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

export default function Navigation({user}) {
    const[menuActive,setMenuActive] = useState(false);

  return (
    <nav className="site-navigation">
      <Link to="/" exact className="logo">
        My React Blog
      </Link>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={link}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={64}
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
        <i className="ionicons icon ion-ios-menu"/>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItem } from "../Menu-item/MenuItem";
import "./Navbar.scss";
import logo from "../../assets/shared/logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar flex flex-jc-sb">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon"></div>
        <div className="line"></div>
        <div className="navbar--link">
          <ul className="flex">
            {menuItem.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <span>{item.no}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

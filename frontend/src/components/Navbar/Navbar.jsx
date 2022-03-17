import React from "react";
import { menuItem } from "../Menu-item/MenuItem";
import "./Navbar.scss";
import logo from "../../assets/shared/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex flex-jc-sb">
        <div className="navbar-logo">
          <img src={logo} />
        </div>
        <div className="menu-icon"></div>
        <div className="line"></div>
        <div className="navbar--link">
          <ul className="flex">
            {menuItem.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    <span>{item.no}</span>
                    <span>{item.title}</span>
                  </a>
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

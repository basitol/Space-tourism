import React from "react";
import { menuItem } from "../Menu-item/MenuItem";

const Navbar = () => {
  return (
    <>
      <nav className="navbarItems">
        <div className="navbar-logo">
          <img src="" />
        </div>
        <div className="menu-icon"></div>
        <div>
          <ul>
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
        <h2>This is nav</h2>
      </nav>
    </>
  );
};

export default Navbar;

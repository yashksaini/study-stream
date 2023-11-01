import React, { useState } from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import close from "../images/close.png";
import menu from "../images/menu.png";
import logo from "../images/logo.png";
import user from "../images/user.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
          <span>Study Stream</span>
        </div>
        <div className={isOpen ? style.navLinks : style.hideLinks}>
          <div className={style.navBox}>
            <div className={style.topBar}>
              <div className={style.logo}>
                <img src={logo} alt="Logo" />
                <span>Study Stream</span>
              </div>
              <div className={style.closeBox} onClick={toggleNav}>
                <img src={close} alt="Close" />
              </div>
            </div>

            <NavLink to="/" activeclassname="active" onClick={toggleNav}>
              Courses
            </NavLink>
            <NavLink
              to="/dashboard"
              activeclassname="active"
              onClick={toggleNav}
            >
              Dashboard
            </NavLink>
          </div>
          <div className={style.userBox}>
            <img src={user} alt="User" />
            <span>Yash Kumar Saini</span>
          </div>
        </div>
      </div>
      <div className={style.menuBox} onClick={toggleNav}>
        <img src={menu} alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;

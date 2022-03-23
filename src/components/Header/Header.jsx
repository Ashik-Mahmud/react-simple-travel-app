import React from "react";
import { BsGrid } from "react-icons/bs";
import { FiSearch, FiUser } from "react-icons/fi";
import "./Header.css";
const Header = ({ fixed }) => {
  return (
    <header id="header" className={fixed ? "active" : " "}>
      <div className="container">
        <nav className="navbar">
          <a className="logo" href="/">
            Breach.
          </a>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#destination">Destination</a>
            </li>
            <li>
              <a href="#travel">Travel</a>
            </li>
            <li>
              <a href="#book">Book</a>
            </li>
            <li>
              <a href="#views">Views</a>
            </li>
          </ul>
          <div className="profile">
            <label htmlFor="search">
              <FiSearch />
            </label>
            <button>
              <FiUser />
            </button>
          </div>
          <div className="menu-btn">
            <BsGrid />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

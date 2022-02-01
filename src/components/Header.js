import React from "react";
import "./Header.css";
import cryptoPunk from "../assets/assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/assets/header/search.png";
import light from "../assets/assets/header/theme-switch.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="punkLogo" src={cryptoPunk} alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Collection, item or user"
          id=""
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={light} alt="" />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

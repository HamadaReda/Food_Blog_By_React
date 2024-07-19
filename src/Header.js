import React from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";

function openSidebar() {
  document.getElementById("sidebar").classList.remove("hidden");
}

function Header() {
  return (
    <div className="header">
      <FaBars id="bar-btn" onClick={openSidebar} />
      <div>My Food</div>
      <div>Mail</div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Navbar.css";

// Logo
import NavbarLogo from "../../assets/logo192.png";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <img className="Navbar_Image" src={NavbarLogo} />
    </div>
  );
};

export default Navbar;

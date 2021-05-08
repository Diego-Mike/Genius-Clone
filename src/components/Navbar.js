import React from "react";

import { NavbarContain } from "./NavbarStyled";

import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div>
      <NavbarContain>
        <img src={Logo} alt="" />
      </NavbarContain>
    </div>
  );
};

export default Navbar;

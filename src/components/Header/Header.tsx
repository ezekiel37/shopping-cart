import './header.scss'

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from '@headlessui/react'

import logo from "../../assets/images/logo.png"



import DropDown from "../../widgets/Menu/DropDown";
import CartWidget from "../../widgets/CartWidget/CartWidget";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-links">
        <Link className="links" to="/"> WOMEN</Link>
        <Link className="links" to="/men"> MEN</Link>
        <Link className="links" to="/kids"> KIDS</Link>
      
      </div>
      <div className="logo">
      <img src={logo} alt="logo" />
      </div>
      <div className="nav-icons flex">
       <DropDown/>
     <CartWidget/>
       </div>
    </div>
  );
};

export default Header;

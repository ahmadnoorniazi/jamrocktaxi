// libs
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BsChatSquare } from "react-icons/bs";
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { BiCar } from "react-icons/bi";
import React from 'react';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiFillCar, AiOutlineBulb, AiOutlineUserAdd } from "react-icons/ai";

// assets
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const history = useHistory();

  return (
    <header>
      {nav && <div onClick={() => setNav(false)} className="wrap" />}
      <div className="d-flex align-items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="home-nav">
      
          <Link to="/login">
            <AiOutlineUser className="home-nav-user" />
          </Link>
             <Link to="/enter-location">
               <BiCar className="home-nav-user" />
          </Link>

          {nav ? (
            <AiOutlineClose
              className="home-nav-bars"
              onClick={() => setNav(!nav)}
            />
          ) : (
            <AiOutlineMenu
              className="home-nav-bars"
              onClick={() => setNav(!nav)}
            />
          )}
          {/* <div className='home-nav-bars' onClick={() => setNav(!nav)}> */}
          {/* <AiOutlineMenu
            className='home-nav-bars'
            onClick={() => setNav(!nav)}
          /> */}
          {/* </div> */}
        </div>
      </div>
      {nav && (
        <div className="navbar-expand">
          <div className="nav-item">
            <Link to="/">
              <div style={{marginBottom: "1px"}}>
              <AiOutlineHome />
              </div>
              <div>
              Home
              </div>
              </Link>
          </div>
          <div className="nav-item">
            <Link to="/enter-location">
                <div style={{marginBottom: "1px"}}>
              <AiFillCar />
              </div>
              <div>
              Book Taxi
              </div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/login">
              <div style={{marginBottom: "1px"}}>
                <AiOutlineUserAdd />
              </div>
              <div>
               My Account
              </div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/blog">
              <div style={{marginBottom: "1px"}}>
                <AiOutlineBulb />
              </div>
              <div>
                Travel Tips
              </div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/faq">
              <div style={{marginBottom: "1px"}}>
                <FaQuestionCircle />
                </div>
                <div>
                FAQ
              </div>
              </Link>
          </div>
          <div className="nav-item">
            <Link to="/feedback">
              <div style={{marginBottom: "1px"}}>
              <BsChatSquare />
              </div>
              <div>
                 Contact Us
              </div>
              </Link>
          </div>
          <div className="nav-item">
            <Link to="/privacy">T’s & C’s</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

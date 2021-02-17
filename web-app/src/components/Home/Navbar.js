// libs
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { IoTicketOutline } from "react-icons/io5";
// import { AiOutlineMenu } from "react-icons/fa";
import React from 'react';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
          <div
            onClick={() => history.push("/enter-location")}
            className="home-nav-book"
          >
            <p>Book</p>
            {/* <IoTicketOutline /> */}
          </div>
          <Link to="/login">
            <AiOutlineUser className="home-nav-user" />
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
            <Link to="/">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/enter-location">Book Taxi</Link>
          </div>
          <div className="nav-item">
            <Link to="/blog">Travel Tips</Link>
          </div>
          <div className="nav-item">
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="nav-item">
            <Link to="/feedback">Contact Us</Link>
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

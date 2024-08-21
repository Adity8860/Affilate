import React from "react";
import "../Navbar/Navbar.css";
import "../Navbar/Navbar2.css"

import Nav_img from "../Assets/Nav_img.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg   bg-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Nav_img} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className="nav-link active" aria-current="page">
                <a href="/"> Home</a>
              
              </li>
              <li className="nav-link  active ">
              <a href="#about">About</a>
                
              </li>
              <li className="nav-link active">
              <a href="#Product">Product</a>
                
              </li>
              <li className="nav-link active">
                <a href="#contact">Contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;

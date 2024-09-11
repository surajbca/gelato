import React, { useState } from "react";
import gelato from "./images/gelato_logo_black.svg";
import header from "./images/header.svg";
import world from "./images/world.svg";
import shopping from "./images/shopping.svg";
import user from "./images/user_icon.svg";
import arrow from "./images/Arrow-icon.svg";
import "./Navbar.css"; // Custom CSS for the Navbar

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div>
            <ul style={{ liststyletype: "none" }}>
              <img className="gelato" src={gelato} alt="img" />
              <li class="nav-item dropdown Sign-btn" style={{ float: "right" }}>
                <a class="nav-link button " style={{ color: "white" }} href="#">
                  Sign up for free
                </a>
              </li>
              <li class="nav-item dropdown hide" style={{ float: "right" }}>
                <a class="nav-link" href="#">
                  <span>
                    <img className="nav_icon" src={user} alt="img" />
                  </span>
                  &nbsp;
                  <span>Sign in</span>
                </a>
              </li>
              <li class="nav-item dropdown hide" style={{ float: "right" }}>
                <a class="nav-link" href="#home">
                  <span>
                    <img className="nav_icon" src={shopping} alt="img" />
                  </span>
                  &nbsp;
                  <span>Cart</span>
                </a>
              </li>
              <li class="nav-item dropdown hide" style={{ float: "right" }}>
                <a class="nav-link" href="#">
                  <span>
                    <img className="nav_icon" src={world} alt="img" />
                  </span>
                  &nbsp;
                  <span>IN/INR</span>
                </a>
              </li>
              <li style={{ float: "right" }} class="nav-item dropdown hide">
                <a class="nav-link" href="#home">
                  <span>
                    <img className="nav_icon" src={header} alt="img" />
                  </span>
                  &nbsp;
                  <span>Contact us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <div class="navbar-div navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul class={`nav-ul ${menuActive ? "active" : ""}`}>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link">
              Products{" "}
              <span class="icon">
                <img src={arrow}></img>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link">
              Start selling{" "}
              <span class="icon">
                <img src={arrow}></img>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link">
              Tools and apps{" "}
              <span class="icon">
                <img src={arrow}></img>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link">
              Pricing{" "}
              <span class="icon">
                <img src={arrow}></img>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link">
              Resouces{" "}
              <span class="icon">
                <img src={arrow}></img>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link">
              Pro sellers
            </a>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link">
              GelatoConnect{" "}
              <span class="icon">
                <img src={arrow}></img>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;

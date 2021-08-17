import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const url = "http://localhost:3000/";
  window.addEventListener("DOMContentLoaded", NavController);
  function NavController() {
    if (document.URL === url) {
      window.addEventListener("scroll", navScroll);
    } else {
      document.getElementById("navigation").classList.add("scrollNav");
    }
  }

  function navScroll() {
    if (window.scrollY >= 75) {
      document.getElementById("navigation").classList.add("scrollNav");
    } else {
      document.getElementById("navigation").classList.remove("scrollNav");
    }
  }
  return (
    <header>
      <div>
        <nav id="navigation" className="navbar">
          <div className="navContainer">
            {" "}
            <img src="./img/logo.png" alt="logo" id="navLogo" height="81%" />
            <ul className="navMenu">
              <li className="navItem">
                <a href="/" className="navLinks">
                  Ana Sayfa{" "}
                </a>
                {/* <Link to="/" className="navLinks">
                    Anasayfa
                  </Link> */}
              </li>
              <li className="navItem">
                <a href="/about" className="navLinks">
                  Hakkımda
                </a>
                {/* <Link to="/about" className="navLinks">
                  Hakkımda
                </Link> */}
              </li>
              <li className="navItem">
                <a href="/blog" className="navLinks">
                  {" "}
                  Yazılar
                </a>
                {/* <Link to="/blog" className="navLinks">
                  Yazılar
                </Link> */}
              </li>
              <li className="navItem">
                <a href="/contact" className="navLinks">
                  {" "}
                  İletişim
                </a>
                {/* <Link to="/contact" className="navLinks">
                  İletişim
                </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

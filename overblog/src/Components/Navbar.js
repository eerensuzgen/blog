import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);
  //   const url = "http://kuskulu.mkonuk.com/";
  //   window.addEventListener("DOMContentLoaded", NavController);
  //   function NavController() {
  //     if (document.URL === url) {
  //       window.addEventListener("scroll", navScroll);
  //     } else {
  //       document.getElementById("navigation").classList.add("navScroll");
  //     }
  //   }

  //   function navScroll() {
  //     if (window.scrollY >= 100) {
  //       document.getElementById("navigation").classList.add("navScroll");
  //     } else {
  //       document.getElementById("navigation").classList.remove("navScroll");
  //     }
  //   }
  return (
    <div>
      <div class="bs-example container-fluid navigationBar ">
        <nav
          class="navbar navbar-expand-md navbar-light bg-light"
          id="navigation"
        >
          <img src="./img/logoRed.png" width="17.5%" id="navigationBarLogo" />
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav d-flex ml-auto">
              <Link to="/">Anasayfa</Link>
              <Link to="/about">Hakkımda</Link>
              <Link to="/blog">Yazılar</Link>
              <Link to="/contact">İletişim</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

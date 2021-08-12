import React from "react";

export default function Navbar() {
  window.addEventListener("scroll", navScroll);
  function navScroll() {
    if (window.scrollY >= 75) {
      document.getElementById("navigation").classList.add("scrollNav");
    } else {
      document.getElementById("navigation").classList.remove("scrollNav");
    }
  }
  return (
    <div>
      <header>
        <nav id="navigation" class="navbar">
          <div className="navContainer">
            {" "}
            <img src="./img/logo.png" alt="logo" id="navLogo" height="81%" />
            <ul class="navMenu">
              <li class="navItem">
                <a href="/" class="navLinks">
                  Ana Sayfa
                </a>
              </li>
              <li class="navItem">
                <a href="/about" class="navLinks">
                  Hakkımda
                </a>
              </li>
              <li class="navItem">
                <a href="/blog" class="navLinks">
                  Yazılar
                </a>
              </li>
              <li class="navItem">
                <a href="/contact" class="navLinks">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

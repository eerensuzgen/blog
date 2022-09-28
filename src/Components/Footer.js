import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerBlock">
          <a
            href="https://www.instagram.com/alpagutkaslan"
            target="_blank"
            rel="noreferrer"
            className="footerIcon"
          >
            {" "}
            <i className="fa fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.twitter.com/alpagutkaslan"
            target="_blank"
            rel="noreferrer"
            className="footerIcon"
          >
            {" "}
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/enes-karaaslan-366939213/"
            target="_blank"
            rel="noreferrer"
            className="footerIcon"
          >
            {" "}
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCljaZ6x81zVku5SLeQ4Gt3g/"
            target="_blank"
            rel="noreferrer"
            className="footerIcon"
          >
            {" "}
            <i className="fa fa-youtube fa-2x"></i>
          </a>
        </div>
        <div className=" container text-muted mb-3 text-center">
          Bu internet sitesindeki görsel, işitsel ve metinsel bütün içeriklerin
          kullanım hakkı{" "}
          <a
            href="https://www.kuskulu.com"
            className="text-muted"
            target="_blank"
            rel="noreferrer"
          >
            kuskulu.com
          </a>
          'da saklıdır. İçeriklerin tümü 5846 sayılı Fikir ve Sanat Eserleri
          Yasası ve 6769 sayılı Sınai Mülkiyet Yasası kapsamında izinsiz
          kullanılamaz.
        </div>
        <div className="footerBlock1">
          <p className="footerCopyRight">
            &copy; Copyright 2022 | Design by&nbsp;
            <a href="/" id="footerCreater">
              SÜZKON
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

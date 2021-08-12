import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerBlock">
          <a
            href="https://www.instagram.com/alpagutkaslan"
            target="_blank"
            className="footerIcon"
          >
            {" "}
            <i className="fa fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.twitter.com/alpagutkaslan"
            target="_blank"
            className="footerIcon"
          >
            {" "}
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/enes-karaaslan-366939213/"
            target="_blank"
            className="footerIcon"
          >
            {" "}
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div className="footerBlock1">
          &copy; Copyright 2021 Design by <a href="/"> XXX</a>
        </div>
      </footer>
    );
  }
}

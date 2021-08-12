import React, { Component } from "react";
import Start from "./StartPage";
import About from "./InfoAbout";
import Blog from "./ShortBlog";

export default class HomePage extends Component {
  render() {
    return (
      <homepage>
        <Start />
        <About />
        <Blog />
      </homepage>
    );
  }
}

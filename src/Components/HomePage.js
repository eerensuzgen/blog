import React, { Component } from "react";
import Start from "./StartPage";
import About from "./InfoAbout";
import Blog from "./ShortBlog";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Start />
        <About />
        <Blog
          {...this.props}
          blogs={this.props.blogs}
          getData={this.props.getBlogsDataFromDatabase}
        />
      </div>
    );
  }
}

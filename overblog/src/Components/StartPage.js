import React, { Component } from "react";

export default class StartPage extends Component {
  render() {
    return (
      <div className="startOverBlog container">
        <div>
          <img
            src="/img/background.jpg"
            alt="startpageImage"
            className="startImageBox"
          />
        </div>

        <div
          style={{
            marginLeft: "2%",
            fontWeight: "bold",
            fontSize: "50px",
            fontFamily: "Anton",
            color: "#343434",
          }}
        >
          Lorem ipsum dolor sit amet.
          <span
            className="display-6"
            style={{ marginLeft: "2%", fontWeight: "lighter" }}
          >
            <br />
            Merhaba
          </span>
        </div>
      </div>
    );
  }
}

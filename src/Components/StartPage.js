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
          <span className="display-6">
            Uçaklar süzülüyor gökle boyadığım <br />
            Büyük, çok Büyük
            <br />
            Gazete kâğıtlarından yaptığım <br />
            Çocukluğumda.
          </span>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class InfoAbout extends Component {
  render() {
    return (
      <infoAbout>
        <div className="infoAbout">
          <img src="./img/pp.jpg" alt="pp" width="15%" id="pp" />
          <div className="infoAboutText">
            <h1>Hakkımda</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              est et metus tincidunt interdum. Cras pellentesque imperdiet sem
              in posuere. Nulla varius justo turpis. Phasellus porttitor
              fermentum nisl at tincidunt. Aenean ornare elementum fermentum.
              Cras sodales neque nec massa pellentesque laoreet. Nullam laoreet
              est at aliquam porttitor. Maecenas a bibendum ligula. Aliquam erat
              volutpat. Donec ac turpis at justo dictum viverra. Donec sit amet
              molestie diam. Daha detaylı bilgiye <a href="/#">buradan</a>{" "}
              ulaşabilirsiniz
            </p>
          </div>
        </div>
      </infoAbout>
    );
  }
}

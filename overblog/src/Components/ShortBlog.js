import React, { Component } from "react";

export default class ShortBlog extends Component {
  render() {
    return (
      <div>
        <h1 className="shortBlogMainTitle">Yazılar</h1>
        <hr className="shortBlogHr" />
        <div className="shortBlogBox">
          <div className="col-md-4 shortBlogInBox">
            <img src="./img/blog1.jpg" alt="yazı" id="shortBlogImage" />
            <h2 className="shortBlogTitle">
              Araştırmacı Gazetecilik ve Demokrasi
            </h2>
            <h3 className="shortBlogSubtitle">
              Kamunun Bilgi Alma Hakkı ve Dördüncü Güç
            </h3>
            <p className="shortBlogText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              est et metus tincidunt interdum. Cras pellentesque imperdiet sem
              in posuere. Nulla varius justo turpis. Phasellus porttitor
              fermentum nisl at tincidunt. Aenean ornare elementum fermentum.
              Cras sodales neque nec massa pellentesque laoreet. Nullam laoreet
              est at aliquam porttitor. Maecenas a bibendum ligula. Aliquam erat
              volutpat. Donec ac turpis at justo dictum viverra. Donec sit amet
              molestie diam.
            </p>
            <a href="*" className="shortBlogButton">
              Devamı için tıklayınız
            </a>
          </div>
          <div className="col-md-4">
            <img src="./img/blog2.jpg" alt="yazı" id="shortBlogImage" />
            <h2 className="shortBlogTitle">
              Sözlü İletişim ve Maske: Geçmişe mi Dönüyoruz?
            </h2>
            <h3 className="shortBlogSubtitle">***</h3>
            <p className="shortBlogText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              est et metus tincidunt interdum. Cras pellentesque imperdiet sem
              in posuere. Nulla varius justo turpis. Phasellus porttitor
              fermentum nisl at tincidunt. Aenean ornare elementum fermentum.
              Cras sodales neque nec massa pellentesque laoreet. Nullam laoreet
              est at aliquam porttitor. Maecenas a bibendum ligula. Aliquam erat
              volutpat. Donec ac turpis at justo dictum viverra. Donec sit amet
              molestie diam.
            </p>
            <a href="*" className="shortBlogButton">
              Devamı için tıklayınız
            </a>
          </div>
        </div>
        <a href="/blog" className="shortBlogLink">
          Tüm yazılar için tıklayınız
        </a>
      </div>
    );
  }
}

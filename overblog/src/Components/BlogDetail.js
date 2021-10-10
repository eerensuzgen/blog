import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import NotFound from "./NotFound";

const getBlogId = window.location.pathname.split("/");
const blogId = getBlogId[2];

const Blogs = (props) => (
  <article>
    <img
      className="blogDetailImage"
      src={props.blogs.blog_image.base64}
      alt="blogImage"
    />
    <div className="postcard__text t-dark">
      <h1
        className="postcard__title blue"
        style={{ fontSize: "40px", fontWeight: "900", textAlign: "center" }}
      >
        {props.blogs.title}
      </h1>
      <div style={{ fontSize: "1.2rem" }}>
        <time dateTime="2020-05-25 12:00:00">
          <small>
            {props.blogs.createdAt === props.blogs.updatedAt ? (
              <em> Oluşturma tarihi :{props.blogs.createdAt}</em>
            ) : (
              <em>
                Oluşturma tarihi : {props.blogs.createdAt} &nbsp;&nbsp;&nbsp;
                Güncelleme Tarihi : {props.blogs.updatedAt}
              </em>
            )}
          </small>
        </time>
      </div>
      <h4
        className="postcard__title blue"
        style={{
          marginTop: "1.rem",
          fontSize: "1.95rem",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {props.blogs.subtitle}
      </h4>
      <div className="postcard__bar"></div>{" "}
      <div
        style={{
          fontSize: "1.3rem",
          marginTop: "3rem",
          letterSpacing: "1.1px",
          lineHeight: "33px",
        }}
        className="blogDetail1"
      >
        {" "}
        {ReactHtmlParser(`${props.blogs.blog}`)}
      </div>
    </div>
    <br />
  </article>
);

export default class BlogDetail extends Component {
  blogsList() {
    return this.props.blogs.map((currentblogs) => {
      if (currentblogs._id === blogId) {
        return <Blogs blogs={currentblogs} key={currentblogs._id} />;
      } else {
        <NotFound />;
      }
    });
  }
  render() {
    return (
      <div className="blogDetail" style={{ marginTop: "2rem" }}>
        {this.blogsList()}
      </div>
    );
  }
}

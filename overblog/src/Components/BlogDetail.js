import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import NotFound from "./NotFound";

const getBlogId = window.location.pathname.split("/");
const blogId = getBlogId[2];


const Blogs = (props) => (
  <article >
    <img
      className="blogDetailImage"
      src={props.blogs.blog_image}
      alt="blogImage"
    />
    <div className="postcard__text t-dark">
      <h1 className="postcard__title blue">{props.blogs.title}</h1>
      <h4 className="postcard__title blue">{props.blogs.subtitle}</h4>
      <div style={{ fontSize: "1.5rem" }}>
        <time dateTime="2020-05-25 12:00:00">
          <small>
            <em> {props.blogs.createdAt}</em>
          </small>
        </time>
      </div>
      <div className="postcard__bar"></div>{" "}
      <div style={{ fontSize: "1rem" }}>
        {" "}
        {ReactHtmlParser(`${props.blogs.blog}`)}
      </div>
    </div>
  </article>
);

export default class BlogDetail extends Component {
  
  blogsList() {
    return this.props.blogs.map((currentblogs) => {
      if(currentblogs._id === blogId){
        return (
          <Blogs
            blogs={currentblogs}
            key={currentblogs._id}
          />
        );
      }
      else {<NotFound/>}
      
    });
  }
  render() {
    return (
      
      <div className="blogDetail">
       
        {this.blogsList()}
      </div>
    );
  }
}

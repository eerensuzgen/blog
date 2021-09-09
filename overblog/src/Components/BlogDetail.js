import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const getBlogId = window.location.pathname.split("/");
const blogId = getBlogId[2];

const Blogs = (props) => (
  <article className="postcard light blue">
    <img
      className="postcard__img"
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
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/admin/blogs/" + blogId)
      .then((response) => {
        this.setState({ blogs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  blogsList() {
    return <Blogs blogs={this.state.blogs} key={this.state.blogs._id} />;
  }
  render() {
    return (
      <div className="blogDetail">
        <div className="pageDiv" />
        {this.blogsList()}
      </div>
    );
  }
}

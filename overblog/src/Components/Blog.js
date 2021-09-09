import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const Blogs = (props) => (
  <article className="postcard light blue">
    <a className="postcard__img_link" href="/blogDetail">
      <img
        className="postcard__img"
        src={props.blogs.blog_image}
        alt="blogImage"
      />
    </a>
    <div className="postcard__text t-dark">
      <h1 className="postcard__title blue">
        <a href="/blogDetail">{props.blogs.title}</a>
      </h1>
      <div className="postcard__subtitle small">
        <time dateTime="2020-05-25 12:00:00">
          <small>
            <em> {props.blogs.createdAt}</em>
          </small>
        </time>
      </div>
      <div className="postcard__bar"></div>{" "}
      <div className="postcard__preview-txt">{props.blogs.shortCut}</div>
      <ul className="postcard__tagbox">
        <a href={"/blogDetail/" + props.blogs._id}>
          <li className="tag__item">Devamı için tıklayınız</li>
        </a>
      </ul>
    </div>
  </article>
);

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/admin/blogs/")
      .then((response) => {
        this.setState({ blogs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  blogsList() {
    return this.state.blogs.map((currentblogs) => {
      return <Blogs blogs={currentblogs} key={currentblogs._id} />;
    });
  }
  render() {
    return (
      <div>
        {" "}
        <div className="pageDiv" />
        <section className="light">
          <div className="container py-2">
            <div className="h1 text-center text-dark" id="pageHeaderTitle">
              Yazılar
            </div>
            {this.blogsList()}
          </div>
        </section>
      </div>
    );
  }
}

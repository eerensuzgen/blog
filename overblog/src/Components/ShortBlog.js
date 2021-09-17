import React, { Component } from "react";

const Blogs = (props) => (
  <article className="postcard light blue">
    <a className="postcard__img_link" href="/blogDetail">
      <img
        className="postcard__img"
        // src="https://picsum.photos/501/500"
        src={props.blogs.blog_image.base64}
        alt="blogImage"
      />
    </a>
    <div className="postcard__text t-dark">
      <h1 className="postcard__title blue">
        <a href={"/blogDetail/" + props.blogs._id}>{props.blogs.title}</a>
      </h1>
      <div className="postcard__subtitle small">
        <time dateTime="2020-05-25 12:00:00">
          <small>
            <em> {props.blogs.createdAt}</em>
          </small>
        </time>
      </div>
      <div className="postcard__bar"></div>
      <div className="postcard__preview-txt">{props.blogs.shortCut}</div>
      <ul className="postcard__tagbox">
        <li className="tag__item">
          <a href={"/blogDetail/" + props.blogs._id}>Devamı için tıklayınız</a>
        </li>
      </ul>
    </div>
  </article>
);

export default class ShortBlog extends Component {
  blogsList() {
    let lastIndex = this.props.blogs.length;
    return this.props.blogs.reverse().map((currentblogs, i) => {
      if (lastIndex === i + lastIndex) {
        return <Blogs blogs={currentblogs} key={currentblogs._id} />;
      } else if (lastIndex + 1 === i + lastIndex) {
        return <Blogs blogs={currentblogs} key={currentblogs._id} />;
      } else if (lastIndex + 2 === i + lastIndex) {
        return <Blogs blogs={currentblogs} key={currentblogs._id} />;
      }
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

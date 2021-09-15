import React, { Component } from "react";

export default class Blog extends Component {
  blogsList() {
    return this.props.blogs.map((currentblogs) => {
      return (
        <article className="postcard light blue">
          <a className="postcard__img_link" href="/blogDetail">
            <img
              className="postcard__img"
              src={currentblogs.blog_image.base64}
              alt="blogImage"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title blue">
              <a href={"/blogDetail/" + currentblogs._id}>
                {currentblogs.title}
              </a>
            </h1>
            <div className="postcard__subtitle small">
              <time dateTime="2020-05-25 12:00:00">
                <small>
                  <em> {currentblogs.createdAt}</em>
                </small>
              </time>
            </div>
            <div className="postcard__bar"></div>{" "}
            <div className="postcard__preview-txt">{currentblogs.shortCut}</div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <a href={"/blogDetail/" + currentblogs._id}>
                  Devamı için tıklayınız
                </a>
              </li>
            </ul>
          </div>
        </article>
      );
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

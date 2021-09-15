import React, { Component } from "react";

const Blogs = (props) => (
  <tr>
    <td>{props.blogs.title}</td>
    <td>{props.blogs.subtitle}</td>
    <td>{props.blogs.shortCut}</td>
    <td>
      <a onClick={() => props.route.push(`/adminBlogEdit/${props.blogs._id}`)}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <p
        onClick={() => {
          props.deleteBlog(props.blogs._id);
          alert(props.blogs.title + " başlıklı blog silindi.");
        }}
      >
        {" "}
        <i
          className="fa fa-trash fa-2x adminIcon"
          style={{ cursor: "pointer" }}
        ></i>
      </p>
    </td>
  </tr>
);

export default class AdminBlog extends Component {
  blogsList() {
    return this.props.blogs.map((currentblogs) => {
      return (
        <Blogs
          blogs={currentblogs}
          key={currentblogs._id}
          route={this.props.history}
          deleteBlog={this.props.deleteBlog}
        />
      );
    });
  }

  render() {
    return (
      <div className="container mt-5 ">
        <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
          Yazılar
        </h2>
        <div className="container d-flex justify-content-center align-items-center mt-3 mb-4">
          <button
            onClick={() => this.props.history.push("/adminDashboard")}
            className="btn btn-warning  btn-lg "
          >
            Geri Dön
          </button>{" "}
          <a
            onClick={() => this.props.history.push("/adminBlogNew")}
            className="btn btn-warning  btn-lg m-3"
          >
            Yazı Ekle
          </a>
        </div>

        <table className="table">
          <caption>Yazılar Listesi</caption>
          <thead>
            <tr>
              <th scope="col">Başlık</th>
              <th scope="col">Alt Başlık</th>
              <th scope="col">Kısa Yazı</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>{this.blogsList()}</tbody>
        </table>
      </div>
    );
  }
}

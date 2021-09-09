import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = (props) => (
  <tr>
    <td>{props.blogs.title}</td>
    <td>{props.blogs.subtitle}</td>
    <td>{props.blogs.shortcut}</td>
    <td>
      <a href={"/adminBlogEdit/" + props.blogs._id}>
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
  constructor(props) {
    super(props);
    this.deleteBlog = this.deleteBlog.bind(this);
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

  deleteBlog(id) {
    axios.delete("http://localhost:5000/admin/blogs/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      blogs: this.state.blogs.filter((el) => el._id !== id),
    });
  }

  blogsList() {
    return this.state.blogs.map((currentblogs) => {
      return (
        <Blogs
          blogs={currentblogs}
          key={currentblogs._id}
          deleteBlog={this.deleteBlog}
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
          <a href="/adminDashboard" className="btn btn-warning  btn-lg ">
            Geri Dön
          </a>{" "}
          <Link to="/adminBlogNew" className="btn btn-warning  btn-lg m-3">
            Yazı Ekle
          </Link>
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
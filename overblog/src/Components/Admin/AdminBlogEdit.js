import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import FileBase64 from "react-file-base64";

const getBlogId = window.location.pathname.split("/");
const blogId = getBlogId[2];
let ckData = "";
let imagePath = "";
export default class AdminNewUsers extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSubTitle = this.onChangeSubTitle.bind(this);
    this.onChangeUpdatedAt = this.onChangeUpdatedAt.bind(this);
    this.onChangeBlogImage = this.onChangeBlogImage.bind(this);
    this.onChangeShortcut = this.onChangeShortcut.bind(this);
    this.onChangeBlog = this.onChangeBlog.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      subtitle: "",
      createdAt: "",
      updatedAt: "",
      blog_image: "",
      shortCut: "",
      blog: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://kuskulu-backend.herokuapp.com/admin/blogs/" + blogId)
      .then((response) => {
        this.setState({
          title: response.data.title,
          subtitle: response.data.subtitle,
          blog_image: response.data.blog_image,
          createdAt: response.data.createdAt,
          updatedAt: response.data.updatedAt,
          shortCut: response.data.shortCut,
          blog: response.data.blog,
        });
        imagePath = response.data.blog_image;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getFiles(files) {
    imagePath = files;
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeSubTitle(e) {
    this.setState({
      subtitle: e.target.value,
    });
  }

  onChangeUpdatedAt(e) {
    this.setState({
      updatedAt: e.target.value,
    });
  }
  onChangeBlogImage(e) {
    this.setState({
      blog_image: e.target.value,
    });
  }
  onChangeBlog(e) {
    this.setState({
      blog: e.target.value,
    });
  }
  onChangeShortcut(e) {
    this.setState({
      shortCut: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let date = new Date();
    let currentDate = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}   ${date.getHours()}.${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes()
    }`;
    const blog1 = {
      title: document.getElementById("title").value,
      subtitle: document.getElementById("subtitle").value,
      blog_image: imagePath,
      createdAt: this.state.createdAt,
      updatedAt: String(currentDate),
      shortCut: document.getElementById("shortCut").value,
      blog: ckData,
    };

    axios
      .post(
        "https://kuskulu-backend.herokuapp.com/admin/blogs/updateBlog/" +
          blogId,
        blog1
      )
      .then(
        (res) => window.open("/adminBlog", "_self"),
        alert("Yazı başarıyla güncellendi")
      )
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminBlog"
            className="  btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Yazılar Sayfası
          </h2>
        </div>
        <form className="text-center">
          <div className="form-group mb-3">
            <label className="mb-1">Yazı Başlığı</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.title}
              onChange={this.onChangeTitle}
              placeholder="Yazı Başlığını Giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Yazı Alt Başlık</label>
            <input
              type="text"
              className="form-control"
              id="subtitle"
              value={this.state.subtitle}
              onChange={this.onChangeSubTitle}
              placeholder="Yazı Alt Başlığını Giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Yazı Fotoğraf</label>
            <br />
            <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
          </div>
          <div className="form-group">
            <label className="mb-1">Kısa Yazı</label>
            <input
              type="email"
              className="form-control"
              id="shortCut"
              value={this.state.shortCut}
              onChange={this.onChangeShortcut}
              placeholder="Kısa Yazı Giriniz"
            />
          </div>
          <div className="App">
            <h6>Yazı</h6>{" "}
            <CKEditor
              editor={ClassicEditor}
              data={this.state.blog}
              onBlur={(event, editor) => {
                const rawData = JSON.stringify(editor.getData());
                let datax = rawData.split('"');
                datax.pop();
                datax.shift();
                ckData = datax.join();
              }}
            />
          </div>
          <p className="btn btn-warning mb-2 mt-5" onClick={this.onSubmit}>
            Yazı Güncelle
          </p>
        </form>
      </div>
    );
  }
}

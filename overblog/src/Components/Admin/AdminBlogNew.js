import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

let ckData = "";

export default class AdminNewUsers extends Component {
  handleSubmit(data) {
    let date = new Date();
    let currentDate = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;
    const newBlog = {
      title: document.getElementById("title").value,
      subtitle: document.getElementById("subtitle").value,
      blog_image: document.getElementById("blog_image").value,
      createdAt: String(currentDate),
      shortcut: document.getElementById("shortcut").value,
      blog: ckData,
    };
    console.log(newBlog);
    axios
      .post("http://localhost:5000/admin/blogs/newBlog", newBlog)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Hata: " + err));
  }
  render() {
    let date = new Date(Date.now());
    console.log(date);
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
              placeholder="Yazı Başlığını Giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Yazı Alt Başlık</label>
            <input
              type="text"
              className="form-control"
              id="subtitle"
              placeholder="Yazı Alt Başlığını Giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Yazı Fotoğraf</label>
            <input
              type="text"
              className="form-control"
              id="blog_image"
              placeholder="Yazı Fotoğraf Yolunu Giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Kısa Yazı</label>
            <input
              type="email"
              className="form-control"
              id="shortcut"
              placeholder="Kısa Yazı Giriniz"
            />
          </div>
          <div className="App">
            <h6>Yazı</h6>{" "}
            <CKEditor
              editor={ClassicEditor}
              onBlur={(event, editor) => {
                const rawData = JSON.stringify(editor.getData());
                let datax = rawData.split('"');
                datax.pop();
                datax.shift();
                ckData = datax.join();
              }}
              // config={{
              //   ckfinder: { uploadUrl: "" },
              // }}
            />
          </div>
          <a
            href="/adminBlog"
            className="btn btn-warning mb-2 mt-5"
            onClick={this.handleSubmit}
          >
            Yazı Ekle
          </a>
        </form>
      </div>
    );
  }
}

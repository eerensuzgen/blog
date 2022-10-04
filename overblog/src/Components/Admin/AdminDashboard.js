import React, { Component } from "react";

export default class AdminDashboard extends Component {
  handleSubmit = () => {
    sessionStorage.clear();
    window.open("/", "_self");
  };

  render() {
    return (
      <div className="mt-5 ">
        <div className="container d-flex justify-content-center align-items-center  flex-column ">
          <h1
            className="page-header column text-center"
            style={{ fontSize: "2rem" }}
          >
            Admin Paneline Hoşgeldiniz !
          </h1>

          <p className="mt-3">Yapmak istediğiniz işlemi seçiniz.</p>
        </div>
        <br />
        <div className="container d-flex justify-content-center align-items-center flex-column ">
          <a href="/adminBlog" className="btn btn-warning col-md-2 mt-3 btn-lg">
            Yazılarım
          </a>

          <a
            className="btn btn-danger col-md-2 mt-3 btn-lg"
            onClick={this.handleSubmit}
          >
            Çıkış Yap
          </a>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

export default class AdminLogin extends Component {
  handleSubmit = (e) => {
    const adminUsername = "admin";
    const adminPassword = "admin";
    const username = document.getElementById("userName").value;
    const password = document.getElementById("userPassword").value;

    if (adminUsername === username && adminPassword === password) {
      localStorage.clear();
      window.open("/adminDashboard", "_self");
      alert("Giriş başarılı!");
    } else {
      alert("Kullanıcı adı veya şifre hatalı!");
      localStorage.clear();
      window.open("/admin", "_self");
    }
  };

  render() {
    return (
      <div className="container-fluid ps-md-0 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row g-0">
          <div>
            <div className="login d-flex align-items-center py-5 min-vh-100">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4 display-4">
                      Yönetici Girişine Hoşgeldiniz !
                    </h3>

                    <form onSubmit={this.handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          required
                          placeholder="Lütfen kullanıcı adınızı giriniz"
                        />
                        <label>Kullanıcı Adı</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="userPassword"
                          required
                          placeholder="Lütfen şifrenizi giriniz"
                        />
                        <label>Şifre</label>
                      </div>
                      <p
                        type="btn"
                        className="btn btn-outline-danger btn-lg btn-block"
                        onClick={this.handleSubmit}
                      >
                        Giriş Yap
                      </p>

                      <div className="d-grid"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

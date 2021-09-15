import React, { Component } from "react";
import auth from "../Admin/auth";

export default class AdminLogin extends Component {
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
                          placeholder="Lütfen kullanıcı adınızı giriniz"
                        />
                        <label>Kullanıcı Adı</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="userPassword"
                          placeholder="Lütfen şifrenizi giriniz"
                        />
                        <label>Şifre</label>
                      </div>
                      <button
                        type="btn"
                        className="btn btn-outline-danger btn-lg btn-block"
                        onClick={() => {
                          this.props.admins.forEach((currentusers) => {
                            if (
                              currentusers.username ===
                                document.getElementById("userName").value &&
                              currentusers.password ===
                                document.getElementById("userPassword").value
                            ) {
                              auth.login(() => {
                                alert("Giriş Başarılı");
                                this.props.history.push("/adminDashboard");
                              });
                            } else {
                              alert("Kullanıcı adı veya şifre hatalı!");

                              window.open("/admin", "_self");
                            }
                          });
                        }}
                      >
                        Giriş Yap
                      </button>

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

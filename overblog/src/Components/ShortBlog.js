import React, { Component } from "react";

export default class ShortBlog extends Component {
  render() {
    return (
      <div className="shortBlog">
        <section className="wrapper">
          <h1 className="shortBlogTitle">Yazılar</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div
                  className="card text-white card-has-bg click-col"
                  style={{
                    backgroundImage: `url("https://source.unsplash.com/600x900/?tech,street")`,
                  }}
                >
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <small className="card-meta mb-2">İletişim</small>
                      <h4 className="card-title mt-0 ">
                        <a className="text-white" href="*">
                          Sözlü İletişim ve Maske: Geçmişe mi Dönüyoruz?
                        </a>
                      </h4>
                      <small>
                        <i className="far fa-clock"></i> Ağustos 17, 2021
                      </small>
                    </div>
                    <div className="card-footer">
                      <div className="media">
                        <img
                          className="mr-3 rounded-circle"
                          src="./img/pp.jpg"
                          alt="ProfilePicture"
                          style={{ maxWidth: "50px" }}
                        />
                        <div className="media-body">
                          <h6 className="my-0 text-white d-block">
                            Enes Karaaslan
                          </h6>
                          <small>Gazeteci </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div
                  className="card text-white card-has-bg click-col"
                  style={{
                    backgroundImage: `url("https://source.unsplash.com/600x900/?computer,design")`,
                  }}
                >
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <small className="card-meta mb-2">
                        {" "}
                        Kamunun Bilgi Alma Hakkı ve Dördüncü Güç
                      </small>
                      <h4 className="card-title mt-0 ">
                        <a className="text-white" href="*">
                          Araştırmacı Gazetecilik ve Demokrasi
                        </a>
                      </h4>
                      <small>
                        <i className="far fa-clock"></i> Ağustos 17, 2021
                      </small>
                    </div>
                    <div className="card-footer">
                      <div className="media">
                        <img
                          className="mr-3 rounded-circle"
                          src="./img/pp.jpg"
                          alt="profilePicture"
                          style={{ maxWidth: "50px" }}
                        />
                        <div className="media-body">
                          <h6 className="my-0 text-white d-block">
                            Enes Karaaslan
                          </h6>
                          <small>Gazeteci</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div
                  className="card text-white card-has-bg click-col"
                  style={{
                    backgroundImage: `url("https://source.unsplash.com/600x900/?tree,nature")`,
                  }}
                >
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <small className="card-meta mb-2">Title</small>
                      <h4 className="card-title mt-0 ">
                        <a className="text-white" href="*">
                          Blog 3
                        </a>
                      </h4>
                      <small>
                        <i className="far fa-clock"></i> Çok Yakında
                      </small>
                    </div>
                    <div className="card-footer">
                      <div className="media">
                        <img
                          className="mr-3 rounded-circle"
                          src="./img/pp.jpg"
                          alt="ProfilePicture"
                          style={{ maxWidth: "50px" }}
                        />
                        <div className="media-body">
                          <h6 className="my-0 text-white d-block">
                            Enes Karaaslan
                          </h6>
                          <small>Gazeteci</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

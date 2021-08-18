import React, { Component } from "react";

export default class Blog extends Component {
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
            <article className="postcard light blue">
              <a className="postcard__img_link" href="*">
                <img
                  className="postcard__img"
                  // src="https://picsum.photos/501/500"
                  src="./img/blog1.jpg"
                  alt="blogImage"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="*">Kamunun Bilgi Alma Hakkı ve Dördüncü Güç</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i
                      className="far fa-calendar-alt mr-2"
                      style={{ color: "#000", backgroundColor: "#000" }}
                    ></i>
                    Ağustos 18, 2021
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    Devamı için tıklayınız{" "}
                    <i className="fas fa-arrow-right"></i>
                  </li>
                </ul>
              </div>
            </article>
            <article className="postcard light blue">
              <a class="postcard__img_link" href="*">
                <img
                  className="postcard__img"
                  src="/img/blog2.jpg"
                  alt="blogImage"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="*">Sözlü İletişim ve Maske: Geçmişe mi Dönüyoruz?</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>Ağustos 18, 2021
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    Devamı için tıklayınız <i className="fas fa-arrow-right" />
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

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
              <a className="postcard__img_link" href="/blogDetail">
                <img
                  className="postcard__img"
                  // src="https://picsum.photos/501/500"
                  src="./img/blog1.jpg"
                  alt="blogImage"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="/blogDetail">
                    Kamunun Bilgi Alma Hakkı ve Dördüncü Güç
                  </a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <small>
                      <em>Ağustos 18, 2021</em>
                    </small>
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
                  <a href="/blogDetail">
                    <li className="tag__item">Devamı için tıklayınız</li>
                  </a>
                </ul>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="/blogDetail">
                <img
                  className="postcard__img"
                  src="/img/blog2.jpg"
                  alt="blogImage"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="/blogDetail">
                    Sözlü İletişim ve Maske: Geçmişe mi Dönüyoruz?
                  </a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <small>
                      <em>Ağustos 18, 2021</em>
                    </small>
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
                  <a href="/blogDetail">
                    <li className="tag__item">Devamı için tıklayınız</li>
                  </a>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

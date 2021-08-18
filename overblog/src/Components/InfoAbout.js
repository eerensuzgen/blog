import React, { Component } from "react";

export default class InfoAbout extends Component {
  render() {
    return (
      <div className="infoAbout">
        <img src="./img/pp.jpg" alt="pp" id="pp" />
        <div className="infoAboutText">
          <h1 className="infoAboutTitle">Hakkımda</h1>
          <hr />
          <p className="infoAboutResume">
            Ankara Üniversitesi İletişim Fakültesi Gazetecilik bölüm
            öğrencisiyim. İletişim biliminin disiplinler arası bir bilim
            olduğunu göz önüne alarak yalnızca iletişim alanında değil
            Sosyoloji, Edebiyat ve Tarih başka olmak üzere birçok sosyal bilim
            hakkında bilgi sahibi olmaya çabalıyor ve bu çabalarımı
            karalamalarıma yansıtmaya çalışıyorum.
          </p>
          <a href="/about" className="infoAboutButton">
            Detaylı bilgi için tıklayınız.
          </a>
        </div>
      </div>
    );
  }
}

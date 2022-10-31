import React, { Component } from "react";

export default class InfoAbout extends Component {
  render() {
    return (
      <div className="infoAbout">
        <img src="./img/pp.webp" alt="pp" id="pp" />
        <div className="infoAboutText">
          <h1 className="infoAboutTitle">Hakkımda</h1>
          <hr />
          <p className="infoAboutResume text-justify">
            Ben Enes Karaaslan. Milenyumun ortasına doğmanın etkisiyle artan
            Enes enflasyonu nedeniyle Alpagut E. Karaaslan olarak anılmayı
            yeğliyorum. Ortaöğretim boyunca sayısal ağırlıklı eğitim görmemin
            aksine düşlerimin ardından gitme kararı almamla birlikte yaşamımın
            geri kalan bölümünü etkileyecek ve şimdiden etkilemeye başlayan
            Ankara Üniversitesi İletişim Fakültesi Gazetecilik bölümü 4. sınıf
            öğrencisiyim.
          </p>
          <a href="/about" className="infoAboutButton">
            <i class="fa fa-arrow-right"></i>&nbsp;Detaylı bilgi için
            tıklayınız.
          </a>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="pageDiv" />
        <h1 className="aboutTitle">Hakkımda</h1>
        <hr className="aboutHr" />
        <div className="aboutBioBlock">
          {" "}
          <img
            src="./img/pp.jpg"
            alt="profilePhoto"
            id="aboutImage"
            className="aboutImage1"
          />
          <p className="aboutBioText">
            Okuduğunuz ve okumayı yarıda keseceğiniz endişesiyle kısa kestiğim
            bu yazıya, bütün harf ve noktalama işaretlerine gözünüzün değmesi
            dileğiyle başlamak istiyorum. Endişenin ağırlığı omuzlarımda, pek
            tabii kısa kesmemin bir diğer nedeni de “Hakkımda” başlığı adı
            altında sizlere sunabilecek denli yetkinliklere ulaştığım
            konusundaki çekincelerimdir. Bilmenin ve bilebilmenin verdiği
            mutluluğu duyumsayarak kendim hakkında daha çok bilgiye sahip olma
            dileğini taşımanın yanında, her şeyi bilebilmenin olanaksızlığı
            yolunda yürümenin beni ne gibi güçlüklerle karşı karşıya
            bırakacağını tahmin ediyorum. <br /> Ben Enes Karaaslan. Milenyumun
            ortasına doğmanın etkisiyle artan Enes enflasyonu nedeniyle Alpagut
            E. Karaaslan olarak anılmayı yeğliyorum. Ortaöğretim boyunca sayısal
            ağırlıklı eğitim görmemin aksine düşlerimin ardından gitme kararı
            almamla birlikte yaşamımın geri kalan bölümünü etkileyecek ve
            şimdiden etkilemeye başlayan Ankara Üniversitesi İletişim Fakültesi
            Gazetecilik bölümü 3. sınıf öğrencisiyim. İletişim biliminin
            disiplinler arası bir bilim olduğunu göz önüne alarak yalnızca
            iletişim alanında değil Sosyoloji, Edebiyat, Felsefe ve Tarih başta
            olmak üzere birçok sosyal bilim hakkında bilgi sahibi olmaya
            çabalıyorum. Bilginin tartışmaya, tartışmanın bilgiye evirildiği
            düşüncesinde biri olarak sahip olmaya çabaladığım bilgilerin
            ışığında yazdığım her türlü yazıyı paylaşacağım kuskulu.com ile yeni
            bilgilere kapı aralamayı amaçlıyorum. Bu amacı göz önünde
            bulundurarak belleğin bulanıklığı ile saydamlığı ilkelerinin
            birbirine bağımlılığı tarihsel süreç içerisinde kanıtlanan ve bu
            nedenle son sözünü daha söylemeyen kuşkunun aydınlığında yaşamı
            görünür kılmak adına kuşkuya bağlılığımı dile getirmek için
            “Kuşkulu” adını benimsiyorum. Böylelikle “kuşkunun kuşkusuzluğuyla
            kuşkulu günlere…” ilkesini bir dilek olarak değil amaç olarak
            nitelendiriyorum. Kuşkuyla haykırıyorum ve herkesi dillerden
            düşmeyen, en önemlisi belleklerden silinmeyecek bir biçimde
            haykırmaya çağırıyorum: Kuşkunun kuşkusuzluğuyla kuşkulu günlere…
          </p>
        </div>
        <br />
        <div>
          <h1 id="aboutSchoolTitle">Eğitim</h1>
          <hr className="aboutHr" />
          <img src="./img/aü.jpg" alt="schoolImage" id="aboutSchoolImage" />
          <h1 className="aboutSchoolTitle">
            Ankara Üniversitesi İletişim Fakültesi - Gazetecilik
          </h1>
          <h6 className="aboutSchoolDate">2019 - Devam ediyor</h6>
          <img
            src="./img/yal.png"
            alt="schoolImage"
            className="aboutSchoolImage2"
          />
          <h1 className="aboutSchoolTitle">Yozgat Anadolu Lisesi</h1>
          <h6 className="aboutSchoolDate">2014 - 2018</h6>
        </div>
      </div>
    );
  }
}

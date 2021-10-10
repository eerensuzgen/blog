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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            purus non velit vestibulum accumsan. Quisque id tortor eu lectus
            placerat suscipit at nec ligula. Mauris in maximus mauris, vitae
            facilisis velit. Sed faucibus, lacus ut sodales fermentum, tortor
            mauris sagittis sapien, id suscipit ligula ligula vel metus. Nulla
            ultrices ornare sem et placerat. Proin aliquam nec augue id
            tincidunt. Proin venenatis rhoncus augue non pulvinar. Curabitur
            hendrerit mauris sed scelerisque tempor. Nunc consectetur, eros sed
            tempor hendrerit, elit tellus interdum quam, ac pulvinar mauris
            lacus a justo. In a pretium tellus, ut dapibus odio. Nam ultrices,
            elit eget fringilla volutpat, eros elit fermentum libero, eget
            dignissim sapien tortor eu urna. Sed turpis sapien, molestie vitae
            imperdiet ut, mollis sed nibh. Duis a lacus felis. Vivamus mauris
            enim, iaculis ut vehicula vitae, pellentesque id massa. Nulla
            facilisi. Mauris gravida mauris velit, vitae malesuada sapien
            maximus sit amet. Morbi imperdiet eu mauris ac placerat. Duis nisl
            tortor, molestie non enim vel, tempus ultricies justo. Suspendisse
            et porttitor quam. Integer scelerisque sit amet odio at iaculis.
            Maecenas mollis neque vitae lacus dapibus, id condimentum sapien
            scelerisque. Praesent sed ornare neque, eu vulputate quam. Nam
            laoreet suscipit diam, id sollicitudin massa ultrices ut. Nam
            ullamcorper, libero eget iaculis commodo, turpis magna vestibulum
            nibh, quis congue nibh tellus et mauris. Integer ac risus nibh.
            Nullam rutrum, diam ut ornare aliquet, tortor diam blandit massa, at
            sagittis enim lacus vel nisl. Phasellus egestas auctor mauris et
            bibendum. Proin lobortis vel eros venenatis sollicitudin. Etiam leo
            ex, iaculis sit amet velit eget, rutrum tincidunt dolor. In vel
            ipsum sollicitudin magna lobortis rhoncus. Pellentesque id consequat
            dolor, a fermentum est. Aliquam sed finibus leo. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Etiam tempor
            aliquam massa sed maximus. Proin bibendum, nibh et dignissim
            volutpat, odio mauris pretium ligula, et dignissim erat felis eget
            lorem. Suspendisse porta ut velit sed malesuada.
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

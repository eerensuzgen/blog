import React, { Component } from "react";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_7ddvice",
      "template_ldxyslq",
      e.target,
      "user_J78ippV16uXqwAzWx8Ybc"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
export default class Contact extends Component {
  render() {
    return (
      <div>
        {" "}
        <form onSubmit={sendEmail}>
          <div className="pageDiv" />
          <div className="background">
            <div className="container">
              <div className="screen">
                <div className="screen-header">
                  <div className="screen-header-left">
                    <div className="screen-header-button close"></div>
                    <div className="screen-header-button maximize"></div>
                    <div className="screen-header-button minimize"></div>
                  </div>
                  <div className="screen-header-right">
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>İletişim</span>
                    </div>
                    <div className="app-contact">
                      İletişim e-posta : info@kuskulu.com
                    </div>
                  </div>
                  <div className="screen-body-item">
                    <div className="app-form">
                      <div className="app-form-group">
                        <input
                          required
                          className="app-form-control"
                          placeholder="Ad Soyad"
                          name="contactName"
                          id="contactName"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          required
                          type="email"
                          className="app-form-control"
                          placeholder="E-Posta"
                          name="contactEmail"
                          id="contactEmail"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          required
                          className="app-form-control"
                          placeholder="Konu"
                          name="contactSubject"
                          id="contactSubject"
                        />
                      </div>
                      <div className="app-form-group message">
                        <input
                          required
                          className="app-form-control"
                          placeholder="Mesaj"
                          name="contactMessage"
                          id="contactMessage"
                        />
                      </div>
                      <div className="app-form-group buttons">
                        <input
                          onClick={function () {
                            alert("İletiniz Gönderilmiştir.");
                          }}
                          value=" Gönder"
                          type="submit"
                          className="app-form-button"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

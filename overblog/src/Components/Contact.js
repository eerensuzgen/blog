import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        {" "}
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
                        className="app-form-control"
                        placeholder="Ad Soyad"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="E-Posta"
                      />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="Konu" />
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control" placeholder="Mesaj" />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button">Gönder</button>
                    </div>
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

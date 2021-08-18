import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="pageDiv" />
        <div class="background">
          <div class="container">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>İletişim</span>
                  </div>
                  <div class="app-contact">
                    İletişim e-posta : info@kuskulu.com
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="Ad Soyad" />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="E-Posta" />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="Konu" />
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="Mesaj" />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">Gönder</button>
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

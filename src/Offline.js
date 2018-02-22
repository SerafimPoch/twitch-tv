import React, { Component } from "react";
import cat from "./cat.jpg";

class Offline extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="picture-and-name">
          <div>
            <img className="picture" src={cat} />
          </div>
          <div className="channel-name">
            <a href="http://google.com" target="_blank">
              <p>FreeCodeCamp</p>
            </a>
          </div>
        </div>
        <div className="game-and-status">
          <p>Offline</p>
        </div>
      </div>
    );
  }
}

export default Offline;

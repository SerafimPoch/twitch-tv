import React, { Component } from "react";
import { Button } from "reactstrap";
import cat from "./cat.jpg";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="twitch-name">
            <p>TWITCH STREAMERS</p>
          </div>
          <div className="twitch-buttons">
            <div>
              <Button color="primary">All</Button>
            </div>
            <div>
              <Button color="success">Online</Button>
            </div>
            <div>
              <Button color="info">Offline</Button>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="picture-and-name">
            <div>
              <img className="picture" src={cat} />
            </div>
            <div className="channel-name">
              <p>Esl</p>
            </div>
          </div>
          <div className="game-and-status">
            <p>Offline</p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="picture-and-name">
            <div>
              <img className="picture" src={cat} />
            </div>
            <div className="channel-name">
              <p>Esl</p>
            </div>
          </div>
          <div className="game-and-status">
            <p>Offline</p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="picture-and-name">
            <div>
              <img className="picture" src={cat} />
            </div>
            <div className="channel-name">
              <p>Esl</p>
            </div>
          </div>
          <div className="game-and-status">
            <p>Offline</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

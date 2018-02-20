import React, { Component } from "react";
import { Button } from "reactstrap";
import cat from "./cat.jpg";
import { request } from "./Request";
import { links } from "./Store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["ESL_SC2", "freecodecamp", "huskystarcraft"],
      ESL_SC2: "Offline",
      freecodecamp: "Offline",
      huskystarcraft: "Offline"
    };
  }

  async componentDidMount() {
    let store = [];
    this.state.data.map(async e => {
      const twitchData = await request(e);
      return store.push(twitchData.stream);
    });
    console.log(store[0]);
  }
  render() {
    const data = this.state.data;
    const ESL_SC2 = this.state.ESL_SC2;
    const freecodecamp = this.state.freecodecamp;
    const huskystarcraft = this.state.huskystarcraft;

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
              <a href={links[0]} target="_blank">
                <p>{data[0]}</p>
              </a>
            </div>
          </div>
          <div className="game-and-status">
            <p>{ESL_SC2}</p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="picture-and-name">
            <div>
              <img className="picture" src={cat} />
            </div>
            <div className="channel-name">
              <a href={links[1]} target="_blank">
                <p>{data[1]}</p>
              </a>
            </div>
          </div>
          <div className="game-and-status">
            <p>{freecodecamp}</p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="picture-and-name">
            <div>
              <img className="picture" src={cat} />
            </div>
            <div className="channel-name">
              <a href={links[2]} target="_blank">
                <p>{data[2]}</p>
              </a>
            </div>
          </div>
          <div className="game-and-status">
            <p>{huskystarcraft}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

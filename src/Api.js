import React, { Component } from "react";
import { Button } from "reactstrap";
import cat from "./cat.jpg";
import { request } from "./Request";
import { links } from "./Store";
import Offline from "./Offline";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["ESL_SC2", "freecodecamp", "dikaro4ka"],
      game: "",
      status: "offline"
    };
    this.allClick = this.allClick.bind(this);
  }

  componentDidMount() {
    this.dark();
  }

  async dark() {
    this.state.data.map(async e => {
      const twitchData = await request(e);
      const stream = await twitchData.stream;
      if (stream !== null) {
        this.setState({
          game: ""
        });
        setTimeout(() => {
          this.setState({
            game: (
              <div>
                <div className="content-wrapper">
                  <div className="picture-and-name">
                    <div>
                      <img className="picture" src={stream.channel.logo} />
                    </div>
                    <div className="channel-name">
                      <a href={links[0]} target="_blank">
                        <p>{stream.channel.display_name}</p>
                      </a>
                    </div>
                  </div>
                  <div className="game-and-status">
                    <p>{stream.game}</p>
                  </div>
                </div>
                {this.state.game}
              </div>
            ),
            status: "online"
          });
        }, 100);
      }
    });
  }

  allClick() {
    this.dark();
  }

  render() {
    const data = this.state.data;
    const game = this.state.game;
    return (
      <div className="container">
        <div className="header">
          <div className="twitch-name">
            <p>TWITCH STREAMERS</p>
          </div>
          <div className="twitch-buttons">
            <div>
              <Button onClick={this.allClick} color="primary">
                All
              </Button>
            </div>
            <div>
              <Button color="success">Online</Button>
            </div>
            <div>
              <Button color="info">Offline</Button>
            </div>
          </div>
        </div>
        <div>
          <Offline />
          <div>
            {this.state.status === "online"
              ? game
              : SVGFEComponentTransferElement}
          </div>
        </div>
      </div>
    );
  }
}

export default Api;

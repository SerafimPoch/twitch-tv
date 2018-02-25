import React, { Component } from "react";
import { Button } from "reactstrap";
import cat from "./cat.jpg";
import { request } from "./Request";


class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["ESL_SC2", "xop0",'freecodecamp'],
      online: '',
      offline:'',
      status: "offline"
    };
    this.allClick = this.allClick.bind(this);
    this.offlineClick = this.offlineClick.bind(this);
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
                      <a
                        href={`https://www.twitch.tv/${
                          stream.channel.display_name
                        }`}
                        target="_blank"
                      >
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
            status: 'online'
          });
        }, 100);
      } else {
        this.setState({
          offline: ''
        })
        setTimeout(()=>{
          this.setState({
            offline: <div>
            <div className="content-wrapper">
              <div className="picture-and-name">
                <div>
                  <img className="picture" src={cat} />
                </div>
                <div className="channel-name">
                  <a
                    href={`https://www.twitch.tv/${
                      e
                    }`}
                    target="_blank"
                  >
                    <p>{e}</p>
                  </a>
                </div>
              </div>
              <div className="game-and-status">
                <p>Offline</p>
              </div>
            </div>
            {this.state.offline}
          </div>
          })
        },100)
      }
    });
  }

  allClick() {
    this.dark();
  }

  offlineClick() {}

  render() {
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
              <Button onClick={this.offlineClick} color="info">
                Offline
              </Button>
            </div>
          </div>
        </div>
        <div className='twitch-channels'>
        {game}
        {this.state.offline}  
        </div>
      </div>
    );
  }
}

export default Api;

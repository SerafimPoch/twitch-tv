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
      status: "",
      render: true
    };
    this.allClick = this.allClick.bind(this);
    this.offlineClick = this.offlineClick.bind(this);
    this.onlineClick = this.onlineClick.bind(this)
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
          online: ""
        });
        setTimeout(() => {
          this.setState({
            online: (
              <div>
                <div className="content-wrapper">
                  <div className="picture-and-name">
                    <div>
                      <img className="picture" src={stream.channel.logo} 
                      alt={stream.channel.name} />
                    </div>
                    <div className="channel-name">
                      <a
                        href={stream.channel.url}
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
                {this.state.online}
              </div>
            )
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
                  <img className="picture" src={cat} alt={e} />
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
    this.setState({
      render: true
    })
  }

  onlineClick() {
    this.setState({
      status: 'online',
      render: false
    })
  }

  offlineClick() {
    this.setState({
      status: 'offline'
    })
  }

  render() {
    const online = this.state.online;
    const offline = this.state.offline
    return (
      <div className="container">
        <div className="header">
          <div className="twitch-name">
            <p>TWITCH STREAMERS</p>
          </div>
          <div className="twitch-buttons">
            <div>
              <Button className="button" onClick={this.allClick} color="primary">
                All
              </Button>
            </div>
            <div>
              <Button className="button"  onClick={this.onlineClick} color="success">Online</Button>
            </div>
            <div>
              <Button className="button" onClick={this.offlineClick} color="info">
                Offline
              </Button>
            </div>
          </div>
        </div>
        <div className='twitch-channels'>
        {this.state.render === true ? <div>{online} {offline}</div> : 
      this.state.status === 'online' ? online : offline
      }
        </div>
      </div>
    );
  }
}

export default Api;

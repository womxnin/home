import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircleProgress from './CircleProgress';
import { Media, Player } from 'react-media-player';
// import Circ from './style.js';

const circ = `
  display: inline-block;
  padding: 0;
  margin: 0;
  border: 0;
  line-height: 0;
  background-color: transparent;

  fill: none;
  stroke: #d7dbdc;
  stroke-width: 3;

  cursor: pointer;
  outline: 0;`;
const circfore = `
  stroke: #6e9541;
  transition: 350ms stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const playpause = `
  fill: #6e9541;
  stroke-width: 0;
`;

class CircleMediaPlayer extends Component {
  componentDidMount() {
    this._circle = new CircleProgress(this._svg);
  }

  renderPlay() {
    return (
      <polygon points="13.083,11.5 20.583,16 13.083,20.5 " style={playpause} />
    );
  }

  renderPause() {
    return (
      <g style={playpause}>
        <rect width="3" height="9" x="11.5" y="11.5" />
        <rect width="3" height="9" x="17.5" y="11.5" />
      </g>
    );
  }

  _handleTimeUpdate = ({ currentTime, duration }) => {
    this._circle.setProgress((currentTime / duration) * 100);
  };

  render() {
    return (
      <Media>
        {({ isPlaying, playPause }) => (
          <button style={playpause} onClick={() => playPause()}>
            <Player
              src={this.props.src}
              vendor="audio"
              onTimeUpdate={this._handleTimeUpdate}
            />
            <svg width="32px" height="32px" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14.5" />
              <circle
                style={circfore}
                ref={c => (this._svg = c)}
                cx="16"
                cy="16"
                r="14.5"
              />
              {isPlaying ? this.renderPause() : this.renderPlay()}
            </svg>
          </button>
        )}
      </Media>
    );
  }
}

export default CircleMediaPlayer;

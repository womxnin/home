import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PlayAudio from '@common/PlayAudio';

class MediaPlayer extends Component {
  render() {
    return (
      <Media>
        <div style={{display: 'inline'}}>
          <Player src="http://ssl.gstatic.com/dictionary/static/sounds/20180430/women--_us_1.mp3" />
          <PlayAudio></PlayAudio>
        </div>
      </Media>
    )
  }
}
export default MediaPlayer;
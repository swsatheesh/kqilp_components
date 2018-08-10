import React, { Component } from 'react';
import VideoPlayer from './video_player';
import poster from './media/poster.png';
import video from './media/sample_video.mp4';

class VideoExample extends Component {
  render() {
    return (
      <div>
        <VideoPlayer
          ref={
            (c) => {
              this.player = c;
            }
          }
          src={video}
          poster={poster}
          autoPlay={false}
          controlBar
        />
      </div>
    );
  }
}

export default VideoExample;

import React, { Component } from 'react';
import { Player, BigPlayButton, ControlBar, CurrentTimeDisplay, TimeDivider, VolumeMenuButton } from 'video-react';
import PropTypes from 'prop-types';
import VideoSpace from './custom_components/video_space';
import BezelReplay from './custom_components/bezel_replay';

class VideoPlayer extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      source: this.props.src,
      player: {}
    };
    this.player = null;
    this.playButton = this.playButton.bind(this);
    this.replay = this.replay.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  getPlayerInfo() {
    const { player } = this.player.getState();
    return player;
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  replay() {
    const { player } = this.player.getState();
    if (player.ended) {
      this.player.play();
    }
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
    if (this.props.onStateChange) {
      this.props.onStateChange(state);
    }
  }

  playButton() {
    const { player } = this.player.getState();
    if (player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  render() {
    const videoEndedClass = (this.state.player.ended) ? 'video-ended' : '';
    return (
      <Player
        className={`${videoEndedClass}`}
        ref={
          (c) => {
            this.player = c;
          }
        }
        playsInline
        poster={this.props.poster}
        autoPlay={this.props.autoPlay}
        onLoadStart={this.props.onLoadStart}
        onWaiting={this.props.onWaiting}
        onCanPlay={this.props.onCanPlay}
        onCanPlayThrough={this.props.onCanPlayThrough}
        onPlaying={this.props.onPlaying}
        loop={this.props.loop}
        onEnded={this.props.onEnded}
        onSeeking={this.props.onSeeking}
        onSeeked={this.props.onSeeked}
        onPlay={this.props.onPlay}
        onPause={this.props.onPause}
        onProgress={this.props.onProgress}
        onDurationChange={this.props.onDurationChange}
        onError={this.props.onError}
        onSuspend={this.props.onSuspend}
        onAbort={this.props.onAbort}
        onEmptied={this.props.onEmptied}
        onStalled={this.props.onStalled}
        onLoadedMetadata={this.props.onLoadedMetadata}
        onLoadedData={this.props.onLoadedData}
        onTimeUpdate={this.props.onTimeUpdate}
        onRateChange={this.props.onRateChange}
        onVolumeChange={this.props.onVolumeChange}
      >
        <BigPlayButton position="center" />
        <source src={this.state.source} />
        {
      (this.props.controlBar) ?
        <ControlBar autoHide={false} >
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <VideoSpace order={6} />
          <VolumeMenuButton vertical order={7} />
        </ControlBar> : <ControlBar autoHide={false} disableDefaultControls />
      }
        <BezelReplay onClick={this.replay} />
      </Player>
    );
  }
}

VideoPlayer.defaultProps = {
  src: '',
  poster: '',
  autoPlay: false,
  controlBar: false,
  loop: false,
  onStateChange: () => {},
  onLoadStart: () => {},
  onWaiting: () => {},
  onCanPlay: () => {},
  onCanPlayThrough: () => {},
  onPlaying: () => {},
  onEnded: () => {},
  onSeeking: () => {},
  onSeeked: () => {},
  onPlay: () => {},
  onPause: () => {},
  onProgress: () => {},
  onDurationChange: () => {},
  onError: () => {},
  onSuspend: () => {},
  onAbort: () => {},
  onEmptied: () => {},
  onStalled: () => {},
  onLoadedMetadata: () => {},
  onLoadedData: () => {},
  onTimeUpdate: () => {},
  onRateChange: () => {},
  onVolumeChange: () => {}
};

VideoPlayer.propTypes = {
  src: PropTypes.string,
  poster: PropTypes.string,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  controlBar: PropTypes.bool,
  onStateChange: PropTypes.func,
  onLoadStart: PropTypes.func,
  onWaiting: PropTypes.func,
  onCanPlay: PropTypes.func,
  onCanPlayThrough: PropTypes.func,
  onPlaying: PropTypes.func,
  onEnded: PropTypes.func,
  onSeeking: PropTypes.func,
  onSeeked: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onProgress: PropTypes.func,
  onDurationChange: PropTypes.func,
  onError: PropTypes.func,
  onSuspend: PropTypes.func,
  onAbort: PropTypes.func,
  onEmptied: PropTypes.func,
  onStalled: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  onLoadedData: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onRateChange: PropTypes.func,
  onVolumeChange: PropTypes.func
};

export default VideoPlayer;

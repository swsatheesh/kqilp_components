import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  player: PropTypes.object,
  onClick: PropTypes.func
};

export default class BezelReplay extends Component {

  render() {
    const { player, onClick } = this.props;
    if (!player.ended) {
      return null;
    }
    return (
      <div
        ref={
          (c) => {
            this.button = c;
          }
        }
        className={'video-react-bezel video-react-bezel-animation-replay'}
      >
        <div
          className={'video-react-bezel-icon video-react-bezel-icon-replay'}
          onClick={onClick}
        />
      </div>
    );
  }
}

BezelReplay.propTypes = propTypes;

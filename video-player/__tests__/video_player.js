import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from '../video_player';

import poster from '../media/poster.png';
import video from '../media/sample_video.mp4';

// Mock store setup.

jest.unmock('../video_player');

describe('components', () => {
  describe('<VideoPlayer />', () => {
    it('should render VideoPlayer', () => {
      const comp = renderer.create(
        <VideoPlayer
          src={video}
          poster={poster}
          autoPlay={false}
          onTimeUpdate={() => {
          }}
          controlBar
        />
      ).toJSON();
      expect(comp).toMatchSnapshot();
    });
  });
});

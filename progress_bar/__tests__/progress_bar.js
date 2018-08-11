import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../progress_bar';

jest.unmock('../progress_bar');

describe('components', () => {
  describe('<ProgressBar />', () => {
    it('should render correctly', () => {
      const Progress = renderer.create(
        <ProgressBar now={10} />
      ).toJSON();
      expect(Progress).toMatchSnapshot();
    });
    it('should render correctly with active stripes', () => {
      const Progress = renderer.create(
        <ProgressBar now={10} striped active labelVisibility>Progress Level</ProgressBar>
      ).toJSON();
      expect(Progress).toMatchSnapshot();
    });
  });
});

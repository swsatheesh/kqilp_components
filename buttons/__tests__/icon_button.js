import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../icon_button';

jest.unmock('../icon_button');

describe('component', () => {
  describe('<IconButton />', () => {
    it('should render correctly', () => {
      const button = renderer.create(
        <IconButton iconName={'home'} />
      ).toJSON();
      expect(button).toMatchSnapshot();
    });
  });
});

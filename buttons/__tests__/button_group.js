import React from 'react';
import renderer from 'react-test-renderer';
import ButtonGroup from '../button_group';

describe('components', () => {
  describe('<ButtonGroup />', () => {
    it('should render', () => {
      const buttonGroup = renderer.create(
        <ButtonGroup />
      ).toJSON();
      expect(buttonGroup).toMatchSnapshot();
    });
  });
});

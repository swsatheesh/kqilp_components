import React from 'react';
import renderer from 'react-test-renderer';
import ImageComponent from '../image_component';

// Mock store setup.

jest.unmock('../image_component');

describe('components', () => {
  describe('<ImageComponent />', () => {
    it('should render ImageComponent', () => {
      const comp = renderer.create(
        <ImageComponent
          src={test.png}
          alt={''}
        />
      ).toJSON();
      expect(comp).toMatchSnapshot();
    });
  });
});

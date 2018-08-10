import React from 'react';
import renderer from 'react-test-renderer';
import ImageLabel from '../image_label';

jest.unmock('../image_label');

describe('components', () => {
  describe('<ImageLabel />', () => {
    it('should render correctly', () => {
      const Image = renderer.create(
        <ImageLabel src={'test.png'} />
      ).toJSON();
      expect(Image).toMatchSnapshot();
    });
    it('should render correctly with label', () => {
      const Image = renderer.create(
        <ImageLabel src={'test.png'} altText={'test image'} imgClass={''} labelClass={''}>MyLabel</ImageLabel>
      ).toJSON();
      expect(Image).toMatchSnapshot();
    });
  });
});

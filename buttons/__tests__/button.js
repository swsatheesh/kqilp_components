import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';

jest.unmock('../button');

describe('component', () => {
  describe('<Button />', () => {
    it('should render correctly', () => {
      const clickHander = jest.fn();
      const button = renderer.create(
        <Button onClick={clickHander}>click me</Button>
      ).toJSON();
      expect(button).toMatchSnapshot();

      // Click callback
      button.props.onClick();
      expect(clickHander).toBeCalled();
      expect(button.props.className).toEqual('btn btn-outline init-caps');
      expect(button.children).toContain('click me');
    });

    it('should have a large size', () => {
      const button = renderer.create(
        <Button type={'solid'} size={'btn-lg'}>click me large</Button>
      ).toJSON();
      expect(button).toMatchSnapshot();
      expect(button.props.className).toEqual('btn btn-solid btn-lg init-caps');
    });

    it('should have a small size', () => {
      const button = renderer.create(
        <Button type={'solid'} size={'btn-sm'}>click me small</Button>
      ).toJSON();
      expect(button).toMatchSnapshot();
      expect(button.props.className).toEqual('btn btn-solid btn-sm init-caps');
    });

    it('should have disabled', () => {
      const button = renderer.create(
        <Button disabled >click me small</Button>
      ).toJSON();
      expect(button).toMatchSnapshot();
      expect(button.props.className).toEqual('btn btn-outline init-caps');
    });
  });
});

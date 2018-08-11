import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';
import Toolbar from '../toolbar';

jest.unmock('../button');
jest.unmock('../toolbar');

describe('components', () => {
  describe('<Toolbar />', () => {
    it('should render', () => {
      const toolbar = renderer.create(
        <Toolbar><Button /><Button /></Toolbar>
      ).toJSON();
      expect(toolbar).toMatchSnapshot();
      expect(toolbar.props.className).toEqual('btn-toolbar');
    });
  });
});

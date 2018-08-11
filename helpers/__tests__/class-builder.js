import classBuilder from '../class_builder';

describe('the classBuilder helper', () => {
  it('should take a array of default and some strings and return a single string', () => {
    const actual = classBuilder(['one', 'two'], 'three', undefined);
    const expected = 'one two three';
    expect(actual).toEqual(expected);
  });
});
